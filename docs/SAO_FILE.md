# Viết component `.sao`

`.sao` là nguồn giao diện duy nhất để compiler PHP sinh Blade cho SSR và
JavaScript/TypeScript cho trình duyệt. Sửa file trong `resources/saola/`;
`resources/js/saola/` và Blade do compiler sinh là đầu ra, không sửa trực tiếp.

## Cách viết khuyến nghị

Component có logic dùng thứ tự **script setup → template → style scoped**.
Đây là quy ước để dễ đọc; compiler vẫn chấp nhận script sau template.
Ví dụ sau không cần API, layout hay component khác để chạy:

```sao
<script setup lang="ts">
@props({initial: 0}: {initial: number})
@state(count: number = initial)
@computed(doubled: number = count * 2)

export default {
    increment() { setCount(count + 1); },
    reset() { setCount(initial); },
};
</script>

<template>
    <section>
        <p>Count: <strong id="count">{{ count }}</strong></p>
        <p>Double: <strong id="doubled">{{ doubled }}</strong></p>
        <button id="increment" @click(increment())>+1</button>
        <button id="reset" @click(reset())>Reset</button>
    </section>
</template>

<style scoped>
section { padding: 1rem; }
button { margin-right: 0.5rem; }
</style>
```

Component nhỏ vẫn có thể viết không cần script hay wrapper:

```sao
@state(count = 0)
<button @click(setCount(count + 1))>{{ count }}</button>
```

## Những khái niệm cần học trước

| Nhu cầu | Cách viết mặc định | Quy tắc |
|---|---|---|
| Nhận dữ liệu | `@props({initial: 0}: {initial: number})` | Dữ liệu từ bên ngoài, có mặc định |
| State thay đổi | `@state(count: number = 0)` | Ghi qua `setCount(...)` |
| Giá trị suy ra | `@computed(total = price * qty)` | Chỉ đọc, phụ thuộc state/props; không có side effect |
| Hiển thị | `{{ count }}` | Escape HTML mặc định |
| Tương tác | `@click(increment())` | Method đặt trong `export default` |
| Điều kiện | `@if(visible)` … `@endif` | Đặt trong template |
| Danh sách | `@foreach(items as item)` … `@endforeach` | Dùng `@key(item.id)` để giữ identity |
| Component con | `@importView('web.components.card' as Card)` | Đặt trong setup; `<Card />` trong template |

Khai báo `@...` trong setup phải ở cấp ngoài cùng, không nằm trong method,
vòng lặp hay điều kiện. Khai báo đầu vào trước biểu thức sử dụng nó. JavaScript
`import` và `import type` giữ nguyên cú pháp; `@importView` dành cho view `.sao`.
Không khai báo cùng một biến ở cả setup lẫn ngoài setup.

`@states({...}: {...})` hữu ích khi cần khai báo nhiều state cùng lúc.
`@const` là hằng; `@let` là biến thường, không tự làm computed cập nhật.
Trong script, đọc computed bằng `get$doubled()`; trong template dùng `doubled`.
Đây là API hiện tại, giúp đọc được giá trị mới ngay sau setter trước khi DOM flush.

## Code chạy ở đâu?

| Phần code | Nơi chạy |
|---|---|
| Controller, FormRequest, Policy, database | Laravel server |
| Khai báo dùng chung và biểu thức template | Sinh cả PHP SSR và JavaScript client |
| Import TypeScript, method, code JS thông thường trong setup | Browser |
| Khối `@ssr` … `@endssr` | Server |
| `<style scoped>` | Compiler sinh CSS theo scope |

Cú pháp biểu thức dùng chung là **một tập con**, không phải toàn bộ JavaScript.
Không gọi `window`, `document`, hàm import chỉ có ở browser hay method client
trong computed dùng chung hoặc nội suy SSR. Tính nghiệp vụ ở controller rồi
truyền props; xử lý tương tác trong method của view.

Các callback collection `.filter`, `.map`, `.reduce`, `.length` có hỗ trợ trong
computed theo [quy tắc biểu thức và kiểu](../../compiler/docs/typed-computed.md).
`reduce` cần giá trị khởi tạo; callback dùng biểu thức, không dùng thân hàm tùy ý.

## Sự kiện và vòng đời

Trong template gọi `@submit(save(event))`; kiểu tham số đặt ở **method**:

```ts
export default {
    save(event: Event) {
        event.preventDefault();
    },
}
```

Với input, kiểm tra `event.target instanceof HTMLInputElement` trước khi đọc
`value`. Không viết `@submit(save(event: Event))`: template là lời gọi hàm.

Field riêng của instance phải khai báo trong object để suy luận được `this`.
Listener/timer/kết nối được mở khi view hoạt động cần được dọn khi view dừng;
view trong PageCache có thể được resume. Ví dụ:

```ts
export default {
    timer: undefined as ReturnType<typeof setInterval> | undefined,
    started() { this.startTimer(); },
    resumed() { this.startTimer(); },
    paused() { this.stopTimer(); },
    stopped() { this.stopTimer(); },
    destroyed() { this.stopTimer(); },
    startTimer() {
        this.stopTimer();
        this.timer = setInterval(() => console.log('tick'), 1000);
    },
    stopTimer() {
        if (this.timer !== undefined) clearInterval(this.timer);
        this.timer = undefined;
    },
}
```

## Kiểm tra và build

Chạy từ thư mục ứng dụng `saola/`:

```bash
npm run check       # Compile các context, rồi typecheck toàn app
npm run build       # Kiểm tra trước khi bundle production web
npm run test:unit   # Chạy Vitest một lần
```

Kiểu TypeScript không thay thế validation HTTP. Laravel vẫn kiểm dữ liệu đầu vào
và quyền truy cập; dữ liệu ngoài hệ thống cần được kiểm tại nơi tiếp nhận.
Nếu lỗi nằm trong file `.ts` sinh ra, tìm `.sao` cùng đường dẫn và sửa source.
Ánh xạ lỗi tự động về dòng `.sao` là công việc tiếp theo, chưa có trong lệnh này.

## Tương thích và tài liệu tiếp theo

Cú pháp cũ vẫn được hỗ trợ: khai báo ngoài setup, `<blade>` dùng PHP,
`<sao:blade>`, `@useState` và destructuring `useState`. Dự án mới nên dùng mẫu
ở đầu trang để tránh phải học nhiều cách diễn đạt cùng một việc.

- [Khai báo trong setup](../../compiler/docs/setup-declarations.md)
- [Kiểu dữ liệu và computed](../../compiler/docs/typed-computed.md)
- [Module và controller](MODULES.md)
- [Hợp đồng runtime](../../docs/RUNTIME_CONTRACT.md)

## Pipeline hiện tại

```text
.sao → Builder (Node, watch/Vite) → saola/compiler (PHP)
                                  ├── Blade + marker SSR
                                  ├── JS/TS + marker client
                                  └── CSS, imports, warnings
```

Compiler chạy trong PHP, không cần Python. Builder gọi một lần để nhận cả hai
đầu ra; hai emitter dùng quy tắc marker chung và được kiểm bằng contract tests.
Lệnh Artisan có thể biên dịch view bằng PHP; bundle frontend vẫn cần Node/Vite.
