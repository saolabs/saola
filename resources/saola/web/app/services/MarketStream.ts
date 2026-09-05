/**
 * MarketStream — nguồn tick realtime cho /demo/market.
 *
 * Ưu tiên WebSocket công khai của Binance; hỏng thì rơi sang bộ phát MÔ PHỎNG
 * chứ không để trang đứng im. Người xem luôn biết mình đang xem gì nhờ
 * `onSource` — một trang demo nói dối về nguồn dữ liệu còn tệ hơn trang chết.
 *
 * Vì sao không dùng `@await` hay App.Http cho phần này: đây là kết nối SỐNG,
 * không phải một lần nạp. Nó phải bị đóng trong `destroyed()` của view, nếu
 * không mỗi lần điều hướng SPA vào lại trang là thêm một socket nữa.
 */

export type Tick = {
    time: number;
    open: number;
    high: number;
    low: number;
    close: number;
};

export type Trade = {
    id: string;
    price: number;
    amount: number;
    buy: boolean;
    at: string;
};

type Handlers = {
    onCandle: (tick: Tick) => void;
    onTrade: (trade: Trade) => void;
    onSource: (source: string) => void;
};

const WS_BASE = 'wss://stream.binance.com:9443/stream?streams=';

export class MarketStream {
    private socket: WebSocket | null = null;
    private timer: number | null = null;
    private closed = false;
    private seq = 0;

    constructor(
        private readonly symbol: string,
        private readonly seed: Tick,
        private readonly handlers: Handlers,
    ) {}

    start(): void {
        const lower = this.symbol.toLowerCase();
        let opened = false;

        try {
            this.socket = new WebSocket(`${WS_BASE}${lower}@kline_1m/${lower}@trade`);
        } catch {
            this.simulate();
            return;
        }

        // Không mở nổi trong 4s thì coi như hỏng. Nếu chỉ chờ sự kiện 'error'
        // thì ở mạng chặn WebSocket im lặng, trang sẽ đứng im vô thời hạn.
        const guard = window.setTimeout(() => {
            if (!opened && !this.closed) {
                this.socket?.close();
                this.simulate();
            }
        }, 4000);

        this.socket.addEventListener('open', () => {
            opened = true;
            window.clearTimeout(guard);
            if (!this.closed) this.handlers.onSource('Binance WebSocket');
        });

        this.socket.addEventListener('message', (event) => {
            if (this.closed) return;
            try {
                const payload = JSON.parse(event.data as string);
                const data = payload?.data;
                if (!data) return;

                if (data.e === 'kline' && data.k) {
                    this.handlers.onCandle({
                        time: Math.floor(data.k.t / 1000),
                        open: Number(data.k.o),
                        high: Number(data.k.h),
                        low: Number(data.k.l),
                        close: Number(data.k.c),
                    });
                } else if (data.e === 'trade') {
                    this.handlers.onTrade({
                        id: String(data.t),
                        price: Number(data.p),
                        amount: Number(data.q),
                        // `m` = người mua là maker → lệnh chủ động là BÁN.
                        buy: data.m === false,
                        at: new Date(data.T).toLocaleTimeString('vi-VN', { hour12: false }),
                    });
                }
            } catch {
                // Gói hỏng thì bỏ qua gói đó, không hạ cả kết nối.
            }
        });

        this.socket.addEventListener('error', () => {
            window.clearTimeout(guard);
            if (!this.closed && !opened) this.simulate();
        });

        this.socket.addEventListener('close', () => {
            window.clearTimeout(guard);
            if (!this.closed && !opened) this.simulate();
        });
    }

    /** Bộ phát dự phòng: random walk quanh nến cuối server gửi. */
    private simulate(): void {
        if (this.closed || this.timer !== null) return;
        this.handlers.onSource('mô phỏng (không nối được WebSocket)');

        let candle: Tick = { ...this.seed };
        this.timer = window.setInterval(() => {
            if (this.closed) return;

            const drift = (Math.random() - 0.5) * candle.close * 0.0012;
            const close = Math.max(0.01, candle.close + drift);
            candle = {
                time: candle.time,
                open: candle.open,
                high: Math.max(candle.high, close),
                low: Math.min(candle.low, close),
                close,
            };
            this.handlers.onCandle(candle);

            if (this.seq % 2 === 0) {
                this.handlers.onTrade({
                    id: `sim-${this.seq}`,
                    price: close,
                    amount: Math.round((0.005 + Math.random() * 1.4) * 1000) / 1000,
                    buy: drift >= 0,
                    at: new Date().toLocaleTimeString('vi-VN', { hour12: false }),
                });
            }
            this.seq++;
        }, 900);
    }

    stop(): void {
        this.closed = true;
        if (this.timer !== null) {
            window.clearInterval(this.timer);
            this.timer = null;
        }
        // readyState CONNECTING cũng phải close: socket đang bắt tay mà bỏ mặc
        // thì nó vẫn mở xong rồi sống tiếp sau khi view đã chết.
        this.socket?.close();
        this.socket = null;
    }
}

export default MarketStream;

export function demo({name = 'test', email = "[EMAIL_ADDRESS]"} : {name?: string, email?: string}) {
    console.log(name, email)
}