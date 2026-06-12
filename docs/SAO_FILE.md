# .sao Single-File Component

## Cấu Trúc File

Mỗi file `.sao` gồm 4 phần logic theo thứ tự:

```
┌──────────────────────────┐
│  1. DECLARATIONS         │  @states, @props, @let, @const, @vars, @import, @await
│     (đầu file)           │
├──────────────────────────┤
│  2. TEMPLATE             │  HTML + directives
│     (phần chính)         │  Wrapper: <template>, <sao:blade>, <blade>, hoặc không
├──────────────────────────┤
│  3. <script setup>       │  Client-side JS/TS logic (tùy chọn)
├──────────────────────────┤
│  4. <style>              │  Scoped CSS (tùy chọn)
└──────────────────────────┘
```

## Template Wrapper Types

Wrapper quyết định syntax mode. Chỉ wrapper đầu tiên ở level-0 được xử lý.

| Wrapper | Syntax Mode | Mô tả |
|---------|------------|-------|
| `<template>` | **Modern** (JS-like) | Preprocessor biến đổi JS → PHP/Blade |
| `<sao:blade>` | **Modern** (JS-like) | Tương tự `<template>` |
| Không wrapper | **Modern** (JS-like) | Mặc định dùng modern syntax |
| `<blade>` | **Legacy** (PHP syntax) | Pass-through, không preprocessor |

**Modern syntax** dùng JS: `user.name`, `items as item`, `` `Hello ${name}` ``
**Legacy syntax** dùng PHP: `$user->name`, `$items as $item`, `'Hello ' . $name`

## Ví dụ Đầy Đủ

### Modern Syntax (khuyến nghị)

```saola
@states({
    count: 0,
    title: 'Counter App'
})

@const([message, setMessage] = useState('Hello'))
@import(__template__ + 'components.header')

<template>
@extends(__layout__ + 'base')

@block('content')
<div>
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
    <button @click(setCount(count + 1))>
        Count: {{ count }}
    </button>
</div>
@endblock
</template>

<script setup lang="ts">
export default {
    async init() {
        const res = await this.App.Http.get('/api/data');
        setMessage(res.data.message);
    },
    increment() {
        setCount(count + 1);
    }
}
</script>

<style scoped>
button { padding: 8px 16px; }
</style>
```

### Legacy Syntax (`<blade>`)

```saola
@useState($count, 0)
@useState($title, "Counter App")

<blade>
@extends('web.layouts.base')

@section('content')
<div>
    <h1>{{ $title }}</h1>
    <button @click="setCount($count + 1)">
        Count: {{ $count }}
    </button>
</div>
@endsection
</blade>
```

## Directives

### Declarations (đầu file, ngoài wrapper)

| Directive | Mô tả | Ví dụ |
|-----------|--------|-------|
| `@states({...})` | Reactive state (auto setter) | `@states({ count: 0, user: { name: 'Alice' } })` |
| `@state(name = val)` | Single state | `@state(count = 0)` |
| `@props(...)` | Component props | `@props(title, theme = 'light')` |
| `@const(name = val)` | Immutable / useState destruct | `@const([count, setCount] = useState(0))` |
| `@let(name = val)` | Mutable local variable | `@let(total = price * qty)` |
| `@vars(name, ...)` | Non-reactive server vars | `@vars(users, posts)` |
| `@import(...)` | Import .sao components | `@import(__template__ + 'counter')` |
| `@await` | Mark async component | `@await` |

#### @states / @state

```saola
@states({
    count: 0,
    user: { name: 'Alice', age: 25 },
    isVisible: true
})

@state(count = 0)
@state(
    editMode = false,
    items = []
)
```

Mỗi state tự động tạo setter: `count` → `setCount()`, `isVisible` → `setIsVisible()`.

#### @props

```saola
@props(title, content, theme = 'light')
@props({
    title: 'default',
    user: request().user()
})
```

#### @const

```saola
@const(API_URL = '/api/v1')
@const(MAX_COUNT = 10)
@const([count, setCount] = useState(0))
@const([message, setMessage] = useState('Hello'))
```

#### @let

```saola
@let(total = price * qty)
@let(n = 0)
@let(textContent = `${message} Count is ${count}`)
```

#### @vars

```saola
@vars(users, posts)
@vars(users = [])
```

#### @import

```saola
@import(__template__ + 'sessions.tasks')
@import(__template__ + 'sessions.projects' as projects)
@import({
    counter: 'sessions.tasks.count',
    demo: __template__ + 'demo.fetch'
})
@import(__layout__ + 'base' as baseLayout)
```

### Control Flow

| Directive | Ví dụ |
|-----------|-------|
| `@if` / `@elseif` / `@else` / `@endif` | `@if(count > 0) ... @endif` |
| `@foreach` / `@endforeach` | `@foreach(items as key => item) ... @endforeach` |
| `@for` / `@endfor` | `@for(i = 0; i < 10; i++) ... @endfor` |
| `@while` / `@endwhile` | `@while(condition) ... @endwhile` |
| `@switch` / `@case` / `@default` | `@switch(status) @case('active') ... @endswitch` |
| `@break` / `@continue` | Loop control |
| `@ssr` / `@endssr` | Server-side only block (excluded from JS) |

Aliases cho `@ssr`: `@serverSide/@endServerSide`, `@useSSR/@enduseSSR`

### HTML Attribute Binding

| Directive | Mô tả | Ví dụ |
|-----------|--------|-------|
| `@attr({...})` | Dynamic attributes | `@attr({href: link, title: docTitle})` |
| `@class([...])` | Dynamic CSS classes | `@class(['active': isActive, 'btn'])` |
| `@style({...})` | Dynamic inline styles | `@style({'color': textColor})` |
| `@bind(var)` | Two-way data binding | `<input @bind(username) />` |
| `@val(value)` | Bind value attribute | `@val(inputValue)` |
| `@show(cond)` | Toggle display (v-show) | `<div @show(isVisible)>` |
| `@hide(cond)` | Inverse of @show | `<div @hide(isHidden)>` |
| `@checked(cond)` | Bind checked | `@checked(todo.completed)` |
| `@selected(cond)` | Bind selected | `@selected(isSelected)` |
| `@disabled(cond)` | Bind disabled | `@disabled(isLoading)` |
| `@required(cond)` | Bind required | `@required(isRequired)` |
| `@readonly(cond)` | Bind readonly | `@readonly(isReadonly)` |

### Event Handlers

Syntax: `@eventName(handler)` trực tiếp trên HTML element:

```saola
@click(increment())
@click(setCount(count + 1))
@change(updateVal(event))
@submit(save())
@keydown(check(event))
@mouseenter(show())
@dblclick(handler())
@focus(onFocus())
@blur(onBlur())
@wheel(onWheel())
@scroll(onScroll())
@resize(onResize())
@load(onLoad())
@contextmenu(onContext())
```

### Template Architecture

| Directive | Mô tả |
|-----------|--------|
| `@extends(layout)` | Khai báo layout cha |
| `@block('name')` / `@endblock` | Định nghĩa content block |
| `@section('name')` / `@endsection` | Section content |
| `@yield('name')` | Xuất section content |
| `@include('path')` | Include partial |
| `@children` | Slot cho component children |
| `@exec(expr)` | Execute silent (no output) |

### Authorization & Forms

| Directive | Mô tả |
|-----------|--------|
| `@csrf` | CSRF token |
| `@method('PUT')` | Method spoofing |
| `@auth` / `@endauth` | Authenticated block |
| `@guest` / `@endguest` | Guest block |
| `@can('perm')` / `@endcan` | Authorization |
| `@cannot('perm')` / `@endcannot` | Negative authorization |
| `@error('field')` / `@enderror` | Validation error |
| `@hasSection('name')` / `@endhassection` | Check section exists |
| `@verbatim` / `@endverbatim` | Raw output, no compilation |
| `@register` / `@endregister` | Raw JS code block |

### Output / Expressions

```saola
{{ user.name }}              {{-- Escaped output --}}
{!! rawHtml !!}              {{-- Unescaped/raw output --}}
{{-- Comment --}}            {{-- Blade comment (removed from output) --}}
```

## `<script setup>` Block

Client-side logic, tương tự Vue 3 `<script setup>`. Đặt **sau** template.

```html
<script setup lang="ts">
export default {
    data: {},
    increment() {
        setCount(count + 1);    // Dùng state setter trực tiếp, không cần this.
    },
    async init() {
        // Lifecycle hook — chạy khi mount
        const response = await this.App.Http.get('/api/users');
        setUsers(response.data);
    }
}
</script>
```

- `lang="ts"` hoặc `lang="typescript"` → output file `.ts`
- Methods truy cập state variables và setters trực tiếp (không cần `this.`)
- `this.App` truy cập Saola application container
- `__VIEW_PATH__` available as global

## `<style>` Block

```html
<style scoped>
.counter { text-align: center; }
</style>

<style>
.global-class { color: red; }
</style>
```

## Magic Variables

| Variable | Mô tả |
|----------|--------|
| `__template__` | Base path cho template components |
| `__layout__` | Base path cho layout components |
| `__VIEW_PATH__` | Dot-notation path hiện tại (e.g. `web.pages.home`) |
| `__VIEW_ID__` | Unique view ID cho hydration |
| `__context__` | Context hiện tại |
| `__base__`, `__page__`, `__component__`, `__partial__`, `__system__` | System data từ render context |

## Compiler Pipeline

```
.sao file
    │
    ├─ parseSaoFile() [Node.js]
    │    ├─ Extract declarations (giữ thứ tự)
    │    ├─ Detect wrapper type → syntax mode
    │    ├─ Extract template, @ssr blocks, <script setup>, <style>
    │    └─ Detect TypeScript từ lang attribute
    │
    ├─ Preprocessor (nếu modern syntax):
    │    ├─ Pass 1: Symbol Collection (build symbol table)
    │    └─ Pass 2: Expression Transform
    │         ├─ JS identifiers → $prefixed PHP vars
    │         ├─ dot.notation → ->property / ['key']
    │         ├─ template literals → PHP concat
    │         └─ {k:v} → ['k'=>v]
    │
    ├─ OUTPUT 1: Blade file (.blade.php)
    │    ├─ sao2blade compiler [Python]
    │    ├─ Add hydrate IDs + @startReactive markers
    │    └─ Resolve @import → @include
    │
    └─ OUTPUT 2: JS/TS View file
         ├─ sao2js compiler [Python]
         ├─ Generate View class + ViewController
         ├─ State management wiring
         └─ Registry entry
```

## Modern vs Legacy Syntax

| Feature | Modern (`<template>` / `<sao:blade>` / bare) | Legacy (`<blade>`) |
|---------|----------------------------------------------|-------------------|
| Variables | `user.name` | `$user->name` |
| State decl | `@states({count: 0})` | `@useState($count, 0)` |
| Loop | `@foreach(items as item)` | `@foreach($items as $item)` |
| Object | `{key: value}` | `['key' => $value]` |
| Concat | `` `Hello ${name}` `` | `'Hello ' . $name` |
