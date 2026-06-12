<?php

$iterator = new RecursiveIteratorIterator(new RecursiveDirectoryIterator('src/App'));

foreach ($iterator as $file) {
    if ($file->isDir() || $file->getExtension() !== 'php') {
        continue;
    }

    $path = $file->getPathname();
    // Remove filename from path to get directory
    $dirStr = $file->getPath();
    
    // Check if it's inside src/
    if (strpos($dirStr, 'src/') === 0) {
         $relativePath = str_replace('src/', '', $dirStr);
         $expectedNamespace = 'One\\' . str_replace('/', '\\', $relativePath);

         $content = file_get_contents($path);
         
         // Find current namespace
         if (preg_match('/namespace\s+([a-zA-Z0-9_\\\\]+)\s*;/', $content, $matches)) {
             $currentNamespace = $matches[1];
             
             if ($currentNamespace !== $expectedNamespace) {
                 echo "Correcting {$path}:\n";
                 echo "  Current: {$currentNamespace}\n";
                 echo "  Expected: {$expectedNamespace}\n";
                 
                 $newContent = preg_replace(
                     '/namespace\s+[a-zA-Z0-9_\\\\]+\s*;/', 
                     "namespace {$expectedNamespace};", 
                     $content
                 );
                 
                 file_put_contents($path, $newContent);
             }
         } else {
             echo "No namespace found in {$path}\n";
         }
    }
}
