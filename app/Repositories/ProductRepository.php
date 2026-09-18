<?php

namespace App\Repositories;

use App\Models\Product;
use App\Repositories\Contracts\ProductRepositoryInterface;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ProductRepository implements ProductRepositoryInterface
{
    public function getAllActive(?string $categorySlug = null): Collection
    {
        $query = Product::where('is_active', true);

        if ($categorySlug) {
            $query->whereHas('categoryRelation', function ($q) use ($categorySlug) {
                $q->where('slug', $categorySlug);
            });
        }

        return $query->orderBy('created_at', 'desc')->get();
    }

    public function paginate(int $perPage = 10, ?string $search = null, ?int $categoryId = null): LengthAwarePaginator
    {
        $query = Product::query();

        if ($categoryId) {
            $query->where('category_id', $categoryId);
        }

        if ($search) {
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('category', 'like', "%{$search}%")
                  ->orWhere('description', 'like', "%{$search}%");
            });
        }

        return $query->orderBy('created_at', 'desc')->paginate($perPage);
    }

    public function findById(int $id): ?Product
    {
        return Product::find($id);
    }

    public function findBySlug(string $slug): ?Product
    {
        return Product::where('slug', $slug)->first();
    }

    public function create(array $data): Product
    {
        if (isset($data['image']) && $data['image'] instanceof UploadedFile) {
            $path = $data['image']->store('products', 'public');
            $data['image_path'] = $path;
        }

        if (empty($data['slug']) && !empty($data['name'])) {
            $data['slug'] = Str::slug($data['name']);
        }

        unset($data['image']);

        return Product::create($data);
    }

    public function update(int $id, array $data): Product
    {
        $product = Product::findOrFail($id);

        if (isset($data['image']) && $data['image'] instanceof UploadedFile) {
            if ($product->image_path && !Str::startsWith($product->image_path, ['http://', 'https://'])) {
                Storage::disk('public')->delete($product->image_path);
            }
            $path = $data['image']->store('products', 'public');
            $data['image_path'] = $path;
        }

        if (!empty($data['name']) && (empty($data['slug']) || $product->name !== $data['name'])) {
            $data['slug'] = Str::slug($data['name']);
        }

        unset($data['image']);

        $product->update($data);
        return $product;
    }

    public function delete(int $id): bool
    {
        $product = Product::findOrFail($id);
        
        if ($product->image_path && !Str::startsWith($product->image_path, ['http://', 'https://'])) {
            Storage::disk('public')->delete($product->image_path);
        }

        return $product->delete();
    }
}
