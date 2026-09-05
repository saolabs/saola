/**
 * ChartService — bọc lightweight-charts để nó sống chung được với hydration.
 *
 * Quy tắc interop, áp dụng cho MỌI thư viện tự quản DOM (biểu đồ, editor,
 * bản đồ, date picker):
 *
 *   1. Cho thư viện một node RIÊNG mà template `.sao` để RỖNG. Framework tạo
 *      node đó rồi không bao giờ đụng vào con của nó, nên hydrate (claim node
 *      có sẵn) và CSR (tạo node mới) cho ra cùng một điểm bắt đầu.
 *   2. Không đặt vùng reactive (`@if`, `@foreach`, `{{ }}`) BÊN TRONG node đó.
 *      Framework mà render lại vùng ấy là DOM của thư viện bị xoá.
 *   3. Nội dung dự phòng cho SSR nằm ở node ANH EM, không nằm trong node của
 *      thư viện — nếu không hai bên sẽ giành nhau cùng một parent.
 *   4. Huỷ trong `destroyed()`. Layout được tái dùng qua điều hướng SPA, nên
 *      không huỷ là mỗi lần vào trang lại chồng thêm một instance.
 *
 * Thư viện được `import()` động: nó chỉ vào bundle của người thật sự mở trang
 * biểu đồ, không nằm trong entry chung.
 */

type Candle = { time: number; open: number; high: number; low: number; close: number };

export class ChartController {
    private chart: any = null;
    private series: any = null;
    private resizeObserver: ResizeObserver | null = null;
    private disposed = false;

    private constructor(private readonly host: HTMLElement) {}

    /**
     * Dựng biểu đồ trong `host`. Trả về null nếu host đã biến mất khỏi DOM
     * giữa chừng — chuyện có thật khi người dùng bấm điều hướng trong lúc
     * `import()` còn đang tải.
     */
    static async mount(host: HTMLElement | null, candles: Candle[], dark = true): Promise<ChartController | null> {
        if (!host) return null;

        const controller = new ChartController(host);
        const { createChart, CandlestickSeries } = await import('lightweight-charts');

        if (controller.disposed || !host.isConnected) return null;

        controller.chart = createChart(host, {
            layout: {
                background: { color: 'transparent' },
                textColor: dark ? '#8b949e' : '#57606a',
                attributionLogo: false,
            },
            grid: {
                vertLines: { color: dark ? 'rgba(139,148,158,.08)' : 'rgba(87,96,106,.08)' },
                horzLines: { color: dark ? 'rgba(139,148,158,.08)' : 'rgba(87,96,106,.08)' },
            },
            rightPriceScale: { borderVisible: false },
            timeScale: { borderVisible: false, timeVisible: true, secondsVisible: false },
            crosshair: { mode: 0 },
            height: host.clientHeight || 320,
        });

        controller.series = controller.chart.addSeries(CandlestickSeries, {
            upColor: '#2ea043', downColor: '#f85149',
            borderUpColor: '#2ea043', borderDownColor: '#f85149',
            wickUpColor: '#2ea043', wickDownColor: '#f85149',
        });
        controller.series.setData(candles);
        controller.chart.timeScale().fitContent();

        // Biểu đồ không tự co theo container; ResizeObserver rẻ hơn nghe 'resize'
        // vì nó bắt cả trường hợp sidebar đóng/mở làm đổi bề ngang.
        controller.resizeObserver = new ResizeObserver(() => {
            if (!controller.disposed && controller.chart) {
                controller.chart.applyOptions({ width: host.clientWidth, height: host.clientHeight || 320 });
            }
        });
        controller.resizeObserver.observe(host);

        return controller;
    }

    /** Cập nhật cây nến đang chạy. Cùng `time` → sửa nến đó; time mới → thêm nến. */
    update(candle: Candle): void {
        if (this.disposed || !this.series) return;
        this.series.update(candle);
    }

    replace(candles: Candle[]): void {
        if (this.disposed || !this.series) return;
        this.series.setData(candles);
        this.chart?.timeScale().fitContent();
    }

    destroy(): void {
        this.disposed = true;
        this.resizeObserver?.disconnect();
        this.resizeObserver = null;
        // remove() dọn cả canvas lẫn listener của thư viện. Thiếu nó thì mỗi lần
        // vào lại trang là một canvas mồ côi nữa nằm trong host.
        this.chart?.remove();
        this.chart = null;
        this.series = null;
    }
}

export default ChartController;
