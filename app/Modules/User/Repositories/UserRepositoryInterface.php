<?php

namespace App\Modules\User\Repositories;

use App\Modules\User\Models\User;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\LengthAwarePaginator;

interface UserRepositoryInterface
{
    public function all(array $filters = [], array $relations = []);
    public function find($id, array $relations = []);
    public function findByEmail(string $email, array $relations = []);
    public function create(array $data);
    public function update($id, array $data);
    public function delete($id);
    public function findByRole(string $role, array $relations = []);
    public function findByStatus(string $status, array $relations = []);
    public function search(string $query, array $relations = []);
    public function getWithSearch(string $search = '', array $filters = [], array $relations = [], int $perPage = 15);
}
