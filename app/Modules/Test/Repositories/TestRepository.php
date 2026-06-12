<?php

namespace App\Modules\Test\Repositories;

use App\Modules\Test\Models\Test;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

class TestRepository
{
    protected Test $model;

    public function __construct(Test $model)
    {
        $this->model = $model;
    }

    /**
     * Get all tests.
     */
    public function all(): Collection
    {
        return $this->model->all();
    }

    /**
     * Get all active tests.
     */
    public function getActive(): Collection
    {
        return $this->model->active()->get();
    }

    /**
     * Get all published tests.
     */
    public function getPublished(): Collection
    {
        return $this->model->published()->get();
    }

    /**
     * Get test by ID.
     */
    public function findById(int $id): ?Test
    {
        return $this->model->find($id);
    }

    /**
     * Get test by slug.
     */
    public function findBySlug(string $slug): ?Test
    {
        return $this->model->where('slug', $slug)->first();
    }

    /**
     * Create a new test.
     */
    public function create(array $data): Test
    {
        return $this->model->create($data);
    }

    /**
     * Update test by ID.
     */
    public function update(int $id, array $data): bool
    {
        $test = $this->findById($id);
        
        if (!$test) {
            return false;
        }

        return $test->update($data);
    }

    /**
     * Delete test by ID.
     */
    public function delete(int $id): bool
    {
        $test = $this->findById($id);
        
        if (!$test) {
            return false;
        }

        return $test->delete();
    }

    /**
     * Restore deleted test by ID.
     */
    public function restore(int $id): bool
    {
        $test = $this->model->withTrashed()->find($id);
        
        if (!$test) {
            return false;
        }

        return $test->restore();
    }

    /**
     * Force delete test by ID.
     */
    public function forceDelete(int $id): bool
    {
        $test = $this->model->withTrashed()->find($id);
        
        if (!$test) {
            return false;
        }

        return $test->forceDelete();
    }

    /**
     * Paginate tests.
     */
    public function paginate(int $perPage = 15): LengthAwarePaginator
    {
        return $this->model->paginate($perPage);
    }

    /**
     * Search tests by name or description.
     */
    public function search(string $query): Collection
    {
        return $this->model->where(function ($q) use ($query) {
            $q->where('name', 'like', "%{$query}%")
              ->orWhere('description', 'like', "%{$query}%");
        })->get();
    }

    /**
     * Get tests by status.
     */
    public function getByStatus(string $status): Collection
    {
        return $this->model->where('status', $status)->get();
    }

    /**
     * Get recent tests.
     */
    public function getRecent(int $limit = 10): Collection
    {
        return $this->model->latest()->limit($limit)->get();
    }

    /**
     * Get test count by status.
     */
    public function getCountByStatus(string $status): int
    {
        return $this->model->where('status', $status)->count();
    }

    /**
     * Get total tests count.
     */
    public function getTotalCount(): int
    {
        return $this->model->count();
    }
}
