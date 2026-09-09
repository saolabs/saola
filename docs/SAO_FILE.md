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

function increment() { setCount(count + 1); }
function reset() { setCount(initial); }
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

Mọi `function` ở cấp ngoài cùng của `<script setup>` trở thành method của view.
Dạng cũ `export default { increment() {...} }` vẫn chạy; hai dạng dùng lẫn nhau
được trong cùng một file.

`let`/`const` khai trong setup thuộc **từng instance view**, hợp để giữ thứ
không reactive — handle của thư viện ngoài, id timer, cờ nội bộ:

```sao
<script setup lang="ts">
@state(count: number = 0)

let clicks = 0;

function increment() {
    clicks++;
    setCount(count + 1);
}
</script>
```

Đường dẫn tới file trong thư mục asset khai bằng `@asset`, đừng viết tay chuỗi:

```sao
<script setup lang="ts">
@asset(logo = 'images/logo.svg')
@assets({icon: 'images/icon.svg'})
</script>

<template>
    <img src="{{ logo }}" alt=""><img src="{{ icon }}" alt="">
</template>
```

Giá trị được giải cùng một tiền tố ở cả hai phía — Blade gọi `asset()`, JavaScript
gọi `App.Helper.asset()` — nên đường dẫn không lệch giữa SSR và CSR.

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
| Con báo lên cha | `<Card @edit(openEditor(event)) />` | Con gọi `$view.emit('edit', payload)`; `event` là payload |

Khai báo `@...` trong setup phải ở cấp ngoài cùng, không nằm trong method,
vòng lặp hay điều kiện. Khai báo đầu vào trước biểu thức sử dụng nó. JavaScript
`import` và `import type` giữ nguyên cú pháp; `@importView` dành cho view `.sao`.
Không khai báo cùng một biến ở cả setup lẫn ngoài setup.

`@states({...}: {...})` hữu ích khi cần khai báo nhiều state cùng lúc.
`@const` là hằng; `@let` là biến thường, không tự làm computed cập nhật.
Trong script, đọc computed bằng `get$doubled()`; trong template dùng `doubled`.
Đây là API hiện tại, giúp đọc được giá trị mới ngay sau setter trước khi DOM flush.

## `$view` — biến hệ thống của view

`$view` trỏ tới chính instance view đang chạy. Nó **không phải** biến bạn khai
báo: compiler đặt sẵn vào phạm vi của view (`const $view = this`), dùng được
trong biểu thức handler và trong `<script setup>`.

```sao
<button @click($view.emit('edit', card['id']))>Sửa</button>

<script setup>
    function ask() {
        if ($view.emit('confirm', card['id']) === false) return;
        $view.emit('close', card['id']);
    }
</script>
```

| Thành viên | Ý nghĩa |
|---|---|
| `$view.emit(<tên>, …)` | Phát sự kiện lên cha đã `@include` view này |
| `$view.path` | Đường dẫn view |

**`$view` CHỈ có ở phía client.** Nó không tồn tại khi Blade render SSR, nên
dùng nó trong biểu thức được SSR render — `{{ }}`, `@class`, `@attr`… — là lỗi
lúc biên dịch, không phải trang trắng lúc chạy:

```sao
<p>{{ $view.path }}</p>          {{-- ✗ compiler báo lỗi ngay --}}
<button @click($view.emit('x'))> {{-- ✓ handler chỉ chạy ở client --}}
```

### Khi nào phải viết `$view.`

`emit` là **method có sẵn của view**, nên trong template nó phân giải y hệt một
method bạn tự viết — `@click(emit('x'))` chạy được, không cần `$view.`:

```sao
<button @click(emit('edit', card['id']))>Sửa</button>        {{-- ✓ --}}
<button @click($view.emit('edit', card['id']))>Sửa</button>  {{-- ✓ cùng nghĩa --}}
```

Trong `<script setup>` thì **bắt buộc** `$view.`: nội dung ở đó đi thẳng vào
output, không qua trình dịch biểu thức, nên không có gì phân giải `emit` cho bạn.

```sao
<script setup>
    function ask() {
        $view.emit('close', card['id']);   {{-- ✓ --}}
        emit('close', card['id']);         {{-- ✗ ReferenceError lúc chạy --}}
    }
</script>
```

Compiler **không** còn tự chèn một biến `emit` vào phạm vi như trước: nó khiến
code đọc lên không biết `emit` từ đâu ra, và view viết tay thì không có nó.

## Con báo sự kiện lên cha

Con phát bằng `$view.emit(<tên>, <payload>)`, cha lắng nghe ngay tại thẻ — giống hệt
`@click` trên một element thường, chỉ khác là tên sự kiện do bạn đặt:

```sao
{{-- cha --}}
<Card :card="card" @edit(openEditor(event)) @remove(remove(card['id'])) />

{{-- con --}}
<button @click($view.emit('edit', card['id']))>Sửa</button>
```

Handler viết y như trên element, ba dạng dùng chung một luật:

| Dạng | Nhận được gì |
|---|---|
| `@edit(openEditor(event))` | `event` là payload đầu tiên |
| `@edit(openEditor)` | tham chiếu — nhận ĐỦ mọi đối số của `$view.emit` |
| `@rename((id, title) => save(id, title))` | tự khai báo arity |

Arrow viết kiểu gì cũng được — `(...args)`, `(a = 1)`, `({id, title})`, và thân
khối `=> { a(); b() }`.

Tên sự kiện không phải định danh hợp lệ thì dùng dạng tổng quát `@on`:

```sao
<Card @on('user:saved', reload) @on('cart.add', ({id}) => addToCart(id)) />
```

`@on('edit', h)` và `@edit(h)` ra cùng một thứ; `@on` thêm được tên có `:` hay
`.`, và không thể đọc nhầm với một sự kiện DOM trùng tên.

`$view.emit` trả về giá trị của listener, nên con hỏi được cha
(`if ($view.emit('close') === false) return;`). Không ai nghe thì nó im lặng, như
một DOM event không listener.

### Cháu báo lên ông

`$view.emit` chỉ nhảy **một tầng** — tới đúng cha đã `@include` view này. Muốn
đi tiếp thì tầng giữa phát lại, viết gọn bằng `$view.emit` đứng trần:

```sao
{{-- tầng giữa: không xử lý gì, chỉ chuyển tiếp --}}
<Row :row="row" @pick($view.emit) @close(emit) />
```

Viết `emit` hay `$view.emit` đều được — cả hai là bản gọn của
`@pick((...args) => $view.emit('pick', ...args))`, nên giữ
nguyên số đối số **và giá trị trả về** — `if ($view.emit('confirm', id) === false)`
vẫn đúng qua nhiều tầng.

Vẫn phải **liệt kê** sự kiện nào được chuyển tiếp. Đó là chủ ý: sự kiện không tự
nổi lên như DOM event, nên không có chuyện một tổ tiên xa vô tình bắt được thứ
không phải của nó.

Với `@include` viết tay, listener nằm **cùng object data**, khoá bắt đầu bằng
`on$`:

```sao
@include('web.components.card', {
    card: card,
    on$edit: openEditor,
    on$remove: (id) => remove(id)
})
```

Một object ở mặt chữ, nhưng compiler tách ngay lúc biên dịch: prop đi đường
prop, listener đi đường riêng. Nên listener không nằm trong props của con,
không sang SSR, và không khiến con nhận prop mới mỗi lần state trong thân
handler đổi. Thẻ component sinh ra đúng biểu diễn đó — hai cách viết, một cơ
chế.

Đây là kênh trực tiếp tới ĐÚNG cha đã `@include` instance này — không phải
`App.Event`. Hai thẻ cùng một component không nghe nhầm của nhau, và không có gì
phải gỡ đăng ký lúc huỷ. `App.Event` vẫn dành cho việc liên lạc giữa hai nhánh
không có quan hệ cha–con.

Listener chỉ chạy ở client: SSR không có ai bấm chuột, nên `@include` phía Blade
không mang chúng.

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
function save(event: Event) {
    event.preventDefault();
}
```

Với input, kiểm tra `event.target instanceof HTMLInputElement` trước khi đọc
`value`. Không viết `@submit(save(event: Event))`: template là lời gọi hàm.

Trạng thái riêng của instance khai bằng `let` ngay trong setup — mỗi view một
bản. Listener/timer/kết nối mở khi view hoạt động phải được dọn khi view dừng;
view trong PageCache có thể được resume, nên `started` và `resumed` đều phải mở,
còn `stopped`/`destroyed` đều phải đóng:

```ts
let timer: ReturnType<typeof setInterval> | undefined;

function startTimer() {
    stopTimer();
    timer = setInterval(() => console.log('tick'), 1000);
}

function stopTimer() {
    if (timer !== undefined) clearInterval(timer);
    timer = undefined;
}

function started() { startTimer(); }
function resumed() { startTimer(); }
function paused() { stopTimer(); }
function stopped() { stopTimer(); }
function destroyed() { stopTimer(); }
```

Dạng cũ `export default { started() { this.startTimer(); }, … }` vẫn chạy, khi
đó field riêng khai trong chính object để suy luận được `this`.

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
