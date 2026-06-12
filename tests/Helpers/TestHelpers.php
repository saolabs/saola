<?php

namespace Tests\Helpers;

use Illuminate\Support\Facades\Cache;
use Mockery;

/**
 * Test Helpers
 * 
 * Các helper functions cho testing
 */
class TestHelpers
{
    /**
     * Clear all caches
     */
    public static function clearCaches(): void
    {
        Cache::flush();
    }

    /**
     * Mock service
     * 
     * @param string $serviceClass
     * @param array $methods
     * @return Mockery\MockInterface
     */
    public static function mockService(string $serviceClass, array $methods = []): Mockery\MockInterface
    {
        $mock = Mockery::mock($serviceClass);
        
        foreach ($methods as $method => $return) {
            $mock->shouldReceive($method)->andReturn($return);
        }
        
        return $mock;
    }

    /**
     * Mock repository
     * 
     * @param string $repositoryClass
     * @param array $methods
     * @return Mockery\MockInterface
     */
    public static function mockRepository(string $repositoryClass, array $methods = []): Mockery\MockInterface
    {
        $mock = Mockery::mock($repositoryClass);
        
        foreach ($methods as $method => $return) {
            $mock->shouldReceive($method)->andReturn($return);
        }
        
        return $mock;
    }

    /**
     * Create fake data
     * 
     * @param array $attributes
     * @return array
     */
    public static function fakeData(array $attributes = []): array
    {
        return array_merge([
            'id' => fake()->randomNumber(),
            'created_at' => now(),
            'updated_at' => now(),
        ], $attributes);
    }
}

