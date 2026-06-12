<?php

namespace App\Modules\User\Services;

use Saola\Core\Services\Service;
use App\Modules\User\Repositories\UserRepositoryInterface;

class UserService extends Service implements UserServiceInterface
{
    public function __construct(private UserRepositoryInterface $repo) {}

    public function getAll() { return $this->repo->all(); }
    public function find($id) { return $this->repo->find($id); }

    public function create(array $data)
    {
        static::on('user.creating', function ($data) { return $data; });
        $user = $this->repo->create($data);
        static::trigger('user.created', $user);
        return $user;
    }

    public function update($id, array $data)
    {
        $user = $this->repo->find($id);
        return $this->repo->update($user, $data);
    }

    public function delete($id)
    {
        $user = $this->repo->find($id);
        return $this->repo->delete($user);
    }
}
