<?php

test('typed grid SSR renders rows and computed pagination without JavaScript', function () {
    $response = $this->get('/demo/grid');
    $response->assertOk()->assertSee('3.800 gói');
    $html = preg_replace('/<!--[\s\S]*?-->/', '', $response->getContent());
    expect($html)->toMatch('/<button[^>]*disabled[^>]*>‹ Trước<\/button>/u');
    expect($html)->not->toMatch('/<button[^>]*disabled[^>]*>Sau ›<\/button>/u');
    expect(strip_tags($html))->toContain('Trang 1 / 152');
    expect(preg_match_all('/<td[^>]*class="[^"]*\bgr-name\b[^"]*"/', $html))->toBe(25);
});

test('typed grid empty search keeps both computed pagination controls disabled', function () {
    $response = $this->get('/demo/grid?q=saola-no-such-package-xyz');
    $response->assertOk()->assertSee('Không có gói nào khớp');
    $html = preg_replace('/<!--[\s\S]*?-->/', '', $response->getContent());
    expect($html)->toMatch('/<button[^>]*disabled[^>]*>‹ Trước<\/button>/u');
    expect($html)->toMatch('/<button[^>]*disabled[^>]*>Sau ›<\/button>/u');
    expect(strip_tags($html))->toContain('Trang 1 / 1');
});
