# Brief trang chủ Saola

Nguồn tham khảo: [inertiajs.com](https://inertiajs.com/), [laravel.com](https://laravel.com/).
Trang đang xét: `saola/resources/saola/web/views/modules/home/index.sao` (292 dòng, **1.246 từ**).

---

## 1. Chẩn đoán

**Dài gấp đôi mức cần thiết.** Inertia — đối thủ gần nhất về định vị — dùng ~650 từ.
Saola đang 1.246 từ cho 8 section: hero → how it works → 6 feature card → bảng so sánh
5 cột × 7 hàng → 4 use-case card → 6 FAQ → design principle band → CTA.

**Dấu vết template AI** nằm ở *hình dạng* chứ không phải ở chữ. Ba lần lặp lại đúng một
khuôn `kicker + h2 + grid 6 ô`; một bảng so sánh chấm điểm 5 đối thủ; một dãy FAQ accordion;
một band manifesto. Đây là bộ khung mặc định của mọi landing page do AI sinh ra — người đọc
kỹ tính nhận ra ngay và tự động giảm tin cậy phần còn lại.

**Toàn bộ trang là lời khẳng định, không có bằng chứng.** Inertia đặt code ngay dưới headline
rồi để code tự nói. Saola show code một lần ở hero rồi giải thích suốt 1.000 từ. Với một
framework chưa có tên tuổi, chữ càng nhiều thì độ tin càng thấp — chỉ có thứ người đọc tự
kiểm chứng được mới có giá trị.

**Giá trị độc bản bị chôn.** SEO nằm ở feature card số 02 và use-case số 02. GEO không xuất
hiện một lần nào. Đây chính là chỗ Saola khác biệt thật, và nó đang bị đối xử ngang hàng
với "43 directive quen thuộc".

---

## 2. Hai trang tham khảo thực sự làm gì

### inertiajs.com (~650 từ)

| Phần | Nội dung |
|---|---|
| Hero | 1 headline + 1 câu mô tả + 2 CTA (`Learn more`, `Read docs`) |
| Code | **Ngay dưới hero**: controller PHP + component Vue, ~25 dòng, cạnh nhau |
| Features | 12 mục dạng **danh sách phẳng**, mỗi mục 1 dòng — không phải card grid |
| Social proof | Logo (United Airlines) + ảnh UI thật của khách hàng |
| CTA cuối | "Start using Inertia today" + 2 nút |

Không có bảng so sánh. Không có FAQ. Không có band triết lý. Không có testimonial bịa.

### laravel.com

Hero → `laravel new my-app` → lưới sản phẩm → "Used By" (OpenAI, Apple, NASA…) → community.
Tất cả đều là **thứ có thể mở ra dùng ngay**, không có đoạn nào thuyết phục bằng tính từ.

> **Chi tiết đáng chép:** laravel.com phục vụ bản Markdown của chính nó cho bot
> (`llms.txt`). Đó là một nước đi GEO thật, không phải khẩu hiệu — và Saola nên có trước
> khi nói về GEO.

---

## 3. Thông điệp lõi mới

Hiện tại trang chủ đang bán *"SPA với backend bạn yêu thích"* — nguyên văn định vị của
Inertia. Đứng cạnh Inertia với cùng một câu, Saola luôn là bản kém chín hơn.

Định vị nên đổi sang thứ Inertia **không nói được**:

> **Mỗi URL trả về HTML hoàn chỉnh — cho người dùng, cho Google, và cho AI.**
> Không cần Node SSR sidecar, không cần bản template thứ hai.

Lý do đây là điểm mạnh thật, không phải khẩu hiệu:

- **Crawler AI phần lớn không chạy JavaScript.** GPTBot, ClaudeBot, PerplexityBot, Google
  AI Overview đọc HTML thô. Một SPA render bằng JS gần như vô hình với chúng.
- Livewire có HTML đầy đủ nhưng mỗi tương tác một round-trip.
- Inertia có SSR nhưng phải nuôi một tiến trình Node riêng.
- SPA + REST API trả về `<div id="app"></div>` rỗng.
- Saola sinh **cả Blade lẫn view client từ cùng một AST** → HTML đầy đủ là mặc định, không
  phải chế độ bật thêm, và không có nguy cơ hai bản template lệch nhau.

**GEO** (Generative Engine Optimization) là chỗ mà 2026 khác 2020: người dùng hỏi ChatGPT/
Perplexity thay vì gõ Google. Không một framework Laravel nào đang nói câu này. Đây là góc
độc bản duy nhất trên bàn.

---

## 4. Cấu trúc đề xuất — 5 section, ~600 từ

| # | Section | Ngân sách | Nội dung |
|---|---|---|---|
| 1 | **Hero** | 60 từ | Headline mới + 1 câu + 2 CTA + cặp code controller/`.sao` (giữ nguyên, đang tốt) |
| 2 | **Bằng chứng** | 40 từ | `curl` một URL bất kỳ → HTML đầy đủ. Terminal thật cạnh browser thật |
| 3 | **Đọc được bởi người, máy và AI** | 150 từ | Section GEO/SEO — xem §5 |
| 4 | **Tính năng** | 200 từ | 8–10 mục **danh sách phẳng**, mỗi mục 1 dòng + link docs (kiểu Inertia) |
| 5 | **CTA cuối** | 40 từ | "Mở docs" + "Xem component đang chạy" |

### Cắt và chuyển đi đâu

| Đang có | Xử lý |
|---|---|
| Bảng so sánh 5 cột × 7 hàng | → `/docs/so-sanh`. Trang chủ để lại **một dòng** link. Bảng chấm điểm đối thủ trên homepage đọc như phòng thủ, không như tự tin |
| 6 FAQ accordion | → `/docs/faq`. FAQ trên homepage là dấu hiệu trang chưa trả lời được câu hỏi từ đầu |
| 4 use-case card | → nén thành 1 dòng trong section tính năng, hoặc một trang `/use-cases` |
| Band "DESIGN PRINCIPLE" | Cắt band, giữ **một câu** ("Server là sự thật, client là sự tiếp nối") đưa lên làm sub-headline của section GEO |
| 6 feature card có kicker + số thứ tự | → danh sách phẳng. Card grid làm 6 mục chiếm 3 màn hình; danh sách làm 10 mục chiếm nửa màn |
| "How it works" 3 bước | Giữ, nén còn 3 dòng một câu |

Bỏ hết `01 /`, `02 /` đánh số và kicker chữ hoa trên mỗi ô — đó là thứ làm trang trông
giống template. Inertia không có cái nào.

---

## 5. Copy nháp

**Hero**

> **Một URL. HTML đầy đủ. Mọi lần.**
> Saola biên dịch một file `.sao` thành cả Blade cho server lẫn view TypeScript cho trình
> duyệt — từ cùng một AST. Người dùng nhận SPA; Google và AI nhận HTML đọc được.
>
> `[Đọc tài liệu ↗]` `[Xem trang này bằng curl →]`

Ba fact chip — thay chip hiện tại:
`SSR mặc định` · `Không cần Node sidecar` · `Laravel 12+`

**Section bằng chứng** — một khối terminal, không kèm chữ giải thích:

```
$ curl -s https://saola.dev/posts/hello | head -20
<!DOCTYPE html>
<html lang="vi">
  <h1>Hello</h1>
  <p>Đăng ngày 12/03/2026</p>
```

**Section GEO**

> ### Viết một lần. Người đọc được, máy đọc được, AI đọc được.
> *Server là sự thật. Client là sự tiếp nối.*
>
> GPTBot, ClaudeBot, PerplexityBot và Google AI Overview phần lớn không chạy JavaScript.
> Một SPA thông thường xuất hiện trước chúng như một trang trắng. Với Saola, HTML đầy đủ
> là phản hồi đầu tiên của mọi URL — không phải một chế độ SSR phải bật, không phải một
> tiến trình Node phải nuôi, và không có bản template thứ hai để lệch.

---

## 6. Phải build trước khi dám viết

Hiện tại tầng SEO trong repo chỉ có `@yield('meta:title' | 'meta:description' | 'meta:keywords')`
tại `saola/resources/views/_system/page/begin.blade.php:6`. Không có canonical, Open Graph,
JSON-LD, sitemap hay `llms.txt`. Nếu trang chủ hứa "SEO + GEO first-class" mà một dev mở
`view-source` lên không thấy gì, uy tín mất nhiều hơn cái đạt được.

Thứ tự làm, tối thiểu để câu chuyện đứng được:

1. **Directive `@meta`** trong `.sao` — title, description, canonical, OG, tự sinh vào `<head>`.
2. **`llms.txt` + bản Markdown của docs** — chép đúng nước đi của laravel.com. Rẻ, và là
   bằng chứng GEO cụ thể nhất có thể trưng ra.
3. **Helper JSON-LD** cho Article/Product — chỉ cần một hàm, không cần package.
4. Sitemap: để sau, Laravel đã có package sẵn.

Mục 1 và 2 là đủ để viết section GEO một cách trung thực.

---

## 7. Checklist

- [ ] Tổng ≤ 700 từ
- [ ] Không section nào lặp lại khuôn `kicker + h2 + grid 6 ô` quá một lần
- [ ] Có ít nhất một thứ người đọc tự kiểm chứng được (khối `curl`)
- [ ] SEO/GEO nằm trong hero hoặc section thứ 2, không phải card thứ 6
- [ ] Không testimonial, không logo khách hàng, không con số % cho tới khi có thật
      (`saola/public/landing.html` đang có đủ cả ba — trang đó nên xoá hoặc viết lại)
