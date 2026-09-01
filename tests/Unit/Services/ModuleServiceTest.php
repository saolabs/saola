<?php

namespace Tests\Unit\Services;

use Tests\TestCase;
use Saola\Core\Services\ModuleService;
use Mockery;

/**
 * Test ModuleService
 *
 * Đã bỏ test_module_property / test_context_property: chúng gán
 * `$service->module = 'test'` từ ngoài trong khi `ModuleService::$module` và
 * `$context` là `protected` THEO THIẾT KẾ (subclass khai báo, vd
 * `protected $module = 'docs'`), và class không có accessor public nào. Hai
 * test đó chỉ khẳng định luật visibility của PHP bị phá — luôn fatal, không
 * bao giờ xanh được, và không gác một hành vi nào của framework.
 */
class ModuleServiceTest extends TestCase
{
    /**
     * Test service initialization
     */
    public function test_service_initialization(): void
    {
        $service = Mockery::mock(ModuleService::class)->makePartial();

        $this->assertInstanceOf(ModuleService::class, $service);
    }
}
