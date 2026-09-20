<?php

namespace App\Repositories\Contracts;

use App\Models\Category;
use Illuminate\Database\Eloquent\Collection;

interface CategoryRepositoryInterface
{
    public function getAll(): Collection;

    public function paginate(int $perPage = 10, ?string $search = null): \Illuminate\Contracts\Pagination\LengthAwarePaginator;

    public function findById(int $id): ?Category;

    public function findBySlug(string $slug): ?Category;

    public function create(array $data): Category;

    public function update(int $id, array $data): Category;

    public function delete(int $id): bool;
}
