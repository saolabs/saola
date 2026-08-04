<?php

test('the application returns a successful response', function () {
    $response = $this->get('/');

    $response->assertStatus(200);
    $response->assertSee('revision:', false);
    $response->assertSee('"component": "web.modules.home.index"', false);
    $response->assertDontSee('"component": {', false);
});
