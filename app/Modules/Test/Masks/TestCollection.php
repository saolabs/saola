<?php
namespace App\Modules\Test\Masks;
use App\Modules\Test\Models\Test;
use Saola\Core\Masks\MaskCollection;
class TestCollection extends MaskCollection 
{
    protected $mask = TestMask::class;
}
