<?php

namespace App\Providers;

use Carbon\CarbonImmutable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\ServiceProvider;
use Saola\Core\Engines\ViewContextManager;
use Illuminate\Validation\Rules\Password;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        $this->configureDefaults();

        // Chạy trong booted() chứ không thẳng trong boot(): thứ tự boot phụ
        // thuộc bootstrap/providers.php, đảo một dòng là core merge đè lên khai
        // báo của app mà không lỗi gì. booted() luôn chạy sau MỌI provider.
        $this->app->booted(fn () => $this->configureViews());
    }

    /**
     * View context của ỨNG DỤNG — đè lên mặc định hệ thống của core.
     *
     * Thứ tự ưu tiên, thấp đến cao:
     *
     *   1. core  — ViewContextServiceProvider, base = slug context
     *   2. app   — chỗ này, cấp worker, đè bằng registerContext() (merge theo khoá)
     *   3. theme — ThemeService::apply() mỗi request, đè cao nhất
     *
     * Khai `base` là đủ: sáu thư mục con suy ra theo nó. Muốn tách riêng thì
     * thêm khoá — vd `'components' => '_shared.components'` để dùng chung giữa
     * các bản giao diện; khoá nào không khai vẫn bám theo base.
     */
    public function configureViews(): void
    {
        app(ViewContextManager::class)->registerContext('web', [
            'base' => 'web',
        ]);

        app(ViewContextManager::class)->registerContext('admin', [
            'base' => 'admin',
        ]);
    }

    protected function configureDefaults(): void
    {
        Date::use(CarbonImmutable::class);

        DB::prohibitDestructiveCommands(app()->isProduction());

        Password::defaults(fn (): ?Password => app()->isProduction()
            ? Password::min(12)
                ->mixedCase()
                ->letters()
                ->numbers()
                ->symbols()
                ->uncompromised()
            : null,
        );
    }

}
