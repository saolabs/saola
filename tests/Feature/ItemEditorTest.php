<?php

test('item editor renders through Laravel SSR with initial users list and modal markup', function () {
    $response = $this->get('/demo/item-editor');
    $response->assertOk();
    $response->assertSee('Modal Editor &amp; Quản lý Item.', false);
    $response->assertSee('Nguyễn Văn An');
    $response->assertSee('an.nguyen@saola.dev');
    $response->assertSee('Trần Thị Bình');
    $response->assertSee('Lê Hoàng Cường');
    $response->assertSee('Tổng:');
    $response->assertSee('Thêm người dùng');
    $response->assertSee('Đảo thứ tự');
});

test('item editor json response returns users payload', function () {
    $response = $this->getJson('/demo/item-editor', [
        'X-Sao-Response' => 'json',
    ]);

    $response->assertOk();
    $data = $response->json();
    expect($data['data']['users'])->toHaveCount(3);
    expect($data['data']['users'][0]['name'])->toBe('Nguyễn Văn An');
});
