<?php

namespace App\Modules\User\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\Modules\User\Services\UserServiceInterface;
use App\Modules\User\Http\Requests\CreateUserRequest;
use App\Modules\User\Http\Requests\UpdateUserRequest;

class UserController extends ApiController
{
    public function __construct(private UserServiceInterface $userService) {}

    public function index()
    {
        $users = $this->userService->getAll();
        return $this->jsonSuccess($users, 'Users retrieved successfully');
    }

    public function show($id)
    {
        $user = $this->userService->find($id);
        if (!$user) {
            return $this->jsonNotFound('User not found');
        }
        return $this->jsonSuccess($user, 'User retrieved successfully');
    }

    public function store(CreateUserRequest $request)
    {
        $user = $this->userService->create($request->validated());
        return $this->jsonCreated($user, 'User created successfully');
    }

    public function update(UpdateUserRequest $request, $id)
    {
        $user = $this->userService->update($id, $request->validated());
        if (!$user) {
            return $this->jsonNotFound('User not found');
        }
        return $this->jsonSuccess($user, 'User updated successfully');
    }

    public function destroy($id)
    {
        $result = $this->userService->delete($id);
        if (!$result) {
            return $this->jsonNotFound('User not found');
        }
        return $this->jsonSuccess(null, 'User deleted successfully');
    }
}
