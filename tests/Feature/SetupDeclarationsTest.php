<?php

test('setup declarations render through Laravel with context imports and assets', function () {
    $response = $this->get('/demo/setup');
    $response->assertOk()->assertSee('Khai báo trong setup');
    $response->assertSee('href="/demo/setup"', false)->assertSee('Setup typesafe');
    $html = preg_replace('/<!--[\s\S]*?-->/', '', $response->getContent());
    expect($html)->toMatch('/id="setup-count"[^>]*>0<\/strong>/');
    expect($html)->toMatch('/id="setup-doubled"[^>]*>0<\/strong>/');
    expect(strip_tags($html))->toContain('View được import qua biến hệ thống');
    expect(strip_tags($html))->toContain('SSR + client');
    expect(strip_tags($html))->toContain('images/logo.svg');
    expect($html)->toContain('Mã nguồn demo', '&lt;script setup lang="ts"&gt;', '&#64;computed');
    expect($html)->not->toContain('@importView');
});

test('setup demo is listed on the demo overview', function () {
    $this->get('/demo')
        ->assertOk()
        ->assertSee('href="/demo/setup"', false)
        ->assertSee('Setup typesafe');
});
