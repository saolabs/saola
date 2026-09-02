<?php

test('the application returns a successful response', function () {
    $response = $this->get('/');

    $response->assertStatus(200);

    // APP_CONFIGS phát JSON gọn (không PRETTY_PRINT) — nó là payload, không
    // phải code để đọc. Assert bám đúng shape đó, đừng bám dấu cách.
    $response->assertSee('"revision":', false);

    // component phải là khoá registry ĐÃ materialize cho request này…
    $response->assertSee('"component":"web.modules.home.index"', false);
    // …chứ không phải descriptor logic thô còn nguyên dạng object.
    $response->assertDontSee('"component":{', false);
});
