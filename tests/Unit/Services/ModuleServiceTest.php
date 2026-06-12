<?php

namespace Tests\Unit\Services;

use Tests\TestCase;
use Saola\Core\Services\ModuleService;
use Mockery;

/**
 * Test ModuleService
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

    /**
     * Test module property
     */
    public function test_module_property(): void
    {
        $service = Mockery::mock(ModuleService::class)->makePartial();
        $service->module = 'test';
        
        $this->assertEquals('test', $service->module);
    }

    /**
     * Test context property
     */
    public function test_context_property(): void
    {
        $service = Mockery::mock(ModuleService::class)->makePartial();
        $service->context = 'web';
        
        $this->assertEquals('web', $service->context);
    }
}

