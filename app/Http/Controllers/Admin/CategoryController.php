<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Repositories\Contracts\CategoryRepositoryInterface;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class CategoryController extends Controller
{
    public function __construct(
        protected CategoryRepositoryInterface $categoryRepository
    ) {}

    public function index(Request $request): Response
    {
        $search = $request->input('search');
        $categories = $this->categoryRepository->paginate(10, $search);

        return Inertia::render('Admin/Categories/Index', [
            'categories' => $categories,
            'filters' => [
                'search' => $search,
            ],
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Admin/Categories/Create');
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255', 'unique:categories,name'],
            'slug' => ['nullable', 'string', 'max:255', 'unique:categories,slug'],
            'description' => ['nullable', 'string'],
        ]);

        $this->categoryRepository->create($validated);

        return redirect()->route('admin.categories.index')
            ->with('success', 'Kategori berhasil ditambahkan!');
    }

    public function edit(int $id): Response
    {
        $category = $this->categoryRepository->findById($id);

        if (!$category) {
            abort(404);
        }

        return Inertia::render('Admin/Categories/Edit', [
            'category' => $category,
        ]);
    }

    public function update(Request $request, int $id): RedirectResponse
    {
        $category = $this->categoryRepository->findById($id);

        if (!$category) {
            abort(404);
        }

        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255', 'unique:categories,name,' . $id],
            'slug' => ['nullable', 'string', 'max:255', 'unique:categories,slug,' . $id],
            'description' => ['nullable', 'string'],
        ]);

        $this->categoryRepository->update($id, $validated);

        return redirect()->route('admin.categories.index')
            ->with('success', 'Kategori berhasil diperbarui!');
    }

    public function destroy(int $id): RedirectResponse
    {
        $category = $this->categoryRepository->findById($id);

        if (!$category) {
            abort(404);
        }

        if ($category->products()->count() > 0) {
            return redirect()->route('admin.categories.index')
                ->with('error', 'Kategori tidak dapat dihapus karena masih digunakan oleh produk.');
        }

        $this->categoryRepository->delete($id);

        return redirect()->route('admin.categories.index')
            ->with('success', 'Kategori berhasil dihapus.');
    }
}
