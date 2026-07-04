    </div>
    <!-- SPA Configuration - Simple config only, all logic handled in JavaScript -->
    <script>
        window.APP_CONFIGS = {
            api: {
                csrfToken: '{{ csrf_token() }}',
                baseUrl: "{{ url('/') }}"
            },
            env: {
                mode: "{{ config('spa.mode') ?? 'web' }}",
                debug: "{{ config('app.debug') ?? false }}",
                base_url: "{{ config('spa.base_url') ?? url('/') }}",
                csrf_token: "{{ config('spa.csrf_token') ?? csrf_token() }}",
                router_mode: "{{ config('spa.router_mode') ?? 'history' }}",
            },
            mode: '{{ config('app.debug') ? 'development' : 'production' }}',
            defaultRoute: '/web',
            container: '#app-root',
            router: {
                mode: 'history',
                base: '/',
                allRoutes: {!! json_encode($__helper->exportSpaRoutes($__context__), JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT) !!},
                routes: {!! json_encode($__helper->exportComponentRoutes($__context__), JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT) !!}
            },
            view: {
                systemData: {
                    
                    __system__: '{{ $__system__ }}',
                    __base__: '{{ $__base__ }}',
                    __layout__: '{{ $__layout__ }}',
                    __page__: '{{ $__page__ }}',
                    __component__: '{{ $__component__ }}',
                    __template__: '{{ $__template__ }}',
                    __context__: '{{ $__context__ }}'
                },
                superView: '{{ $__VIEW_PATH__ ?? null }}',
                
                ssrData: {!! json_encode($__helper->exportApplicationViewData(), JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT) !!}
            }
        };
    </script>

    {{-- SSR hydrate boot — client (App.start → readSSRBoot) đọc để hydrate route đầu.
         viewId của layout chain client tự discover từ DOM. renderSSRBoot tự bỏ qua
         nếu thiếu view/viewId (→ CSR boot). Xem docs/HYDRATION.md §6. --}}
    {!! $__helper->renderSSRBoot($__VIEW_PATH__ ?? '', $__VIEW_ID__ ?? '') !!}

    <!-- Core JavaScript for SPA - Load after APP_CONFIGS is defined -->
    @include($__system__.'partials.scripts')

    <!-- SPA Ready Handler -->
    <script>
        document.addEventListener('app:ready', function(event) {
            console.log('🎉 SPA is ready!');
            if (window.App && window.App.View) {
                window.App.View.__curentMasterView__ = 'layouts.base';
            }
        });
    </script>

</body>
</html>