<?php

$files = [
    'src/Contexts/Web/Bootstrap.php',
    'src/Contexts/Admin/Bootstrap.php',
    'src/Contexts/Api/Bootstrap.php',
    'src/Modules/Home/Providers/HomeRouteServiceProvider.php',
    'src/Modules/User/Providers/UserRouteServiceProvider.php',
    'src/Modules/PWA/Providers/PWARouteServiceProvider.php',
];

foreach ($files as $file) {
    if (!file_exists($file)) continue;
    $content = file_get_contents($file);
    $newContent = str_replace('use One\App\System;', 'use One\App\Routing\System;', $content);
    $newContent = str_replace('use One\App\Context;', 'use One\App\Routing\Context;', $newContent);
    
    if ($content !== $newContent) {
        file_put_contents($file, $newContent);
        echo "Updated $file\n";
    }
}
