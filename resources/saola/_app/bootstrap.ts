/**
 * Bundle CHUNG cho mọi context.
 *
 * Nội dung ở đây được gộp vào `app.{ctx}.js` của TỪNG context — nó là khái niệm
 * ở tầng nguồn, không phải một file build riêng. Xem docs/EXTENSION_ARCHITECTURE.md §5.
 *
 * Thứ gì muốn theme dùng được thì phải đăng ký vào container ở đây; theme không
 * import được module của app (§7.4).
 */
import { defineBundle } from '@saolabs/client';

export default defineBundle({
    name: 'app',
    providers: [],
    services: {},
    helpers: {},
});
