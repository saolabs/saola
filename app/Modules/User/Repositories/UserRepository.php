<?php

namespace App\Modules\User\Repositories;

use Saola\Core\Database\Repositories\BaseRepository;
use App\Modules\User\Models\User;

class UserRepository extends BaseRepository
{
    protected $model = User::class;
}
