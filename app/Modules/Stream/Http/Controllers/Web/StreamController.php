<?php

namespace App\Modules\Stream\Http\Controllers\Web;

use App\Http\Controllers\WebController;
use App\Modules\Stream\Services\EventFeed;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\StreamedResponse;

class StreamController extends WebController
{
    protected $module = 'stream';

    /**
     * Số sự kiện mỗi kết nối, và nhịp giữa hai sự kiện.
     *
     * Stream CÓ GIỚI HẠN chứ không giữ mãi. Server dev chạy `php -S` với
     * PHP_CLI_SERVER_WORKERS=4, nên mỗi kết nối sống chiếm đứt 25% năng lực —
     * hai tab mở là mất một nửa. Đóng sau ~30 giây rồi để EventSource tự nối
     * lại giữ được cảm giác realtime mà không bỏ đói server.
     */
    private const EVENTS_PER_CONNECTION = 30;
    private const INTERVAL_SECONDS = 1;

    public function __construct(private readonly EventFeed $feed) {}

    public function index()
    {
        return $this->response([
            'backlog' => $this->feed->backlog(),
            'perConnection' => self::EVENTS_PER_CONNECTION,
        ]);
    }

    /** Endpoint SSE. `Last-Event-ID` cho phép nối lại mà không nhảy số. */
    public function events(Request $request): StreamedResponse
    {
        $start = (int) ($request->header('Last-Event-ID') ?? $request->query('from', 1000));

        $response = new StreamedResponse(function () use ($start) {
            // Client bỏ đi thì vòng lặp phải dừng, nếu không worker bị giữ cho
            // tới khi hết max_execution_time.
            ignore_user_abort(false);

            for ($i = 1; $i <= self::EVENTS_PER_CONNECTION; $i++) {
                if (connection_aborted()) {
                    return;
                }

                $event = $this->feed->at($start + $i);
                echo 'id: ' . $event['id'] . "\n";
                echo 'data: ' . json_encode($event, JSON_UNESCAPED_UNICODE) . "\n\n";

                // Đẩy ngay: thiếu flush thì PHP gom cả stream lại và client không
                // nhận được gì cho tới khi kết nối đóng — đúng lúc đó thì hết ý nghĩa.
                if (ob_get_level() > 0) {
                    ob_flush();
                }
                flush();

                sleep(self::INTERVAL_SECONDS);
            }
        });

        $response->headers->set('Content-Type', 'text/event-stream');
        $response->headers->set('Cache-Control', 'no-cache');
        // Tắt buffering của nginx nếu có proxy đứng trước; vô hại khi không có.
        $response->headers->set('X-Accel-Buffering', 'no');

        return $response;
    }
}
