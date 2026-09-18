<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Repositories\Contracts\CategoryRepositoryInterface;
use App\Repositories\Contracts\ProductRepositoryInterface;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ProductController extends Controller
{
    public function __construct(
        protected ProductRepositoryInterface $productRepository,
        protected CategoryRepositoryInterface $categoryRepository
    ) {}

    public function index(Request $request): Response
    {
        $search = $request->input('search');
        $products = $this->productRepository->paginate(10, $search);

        return Inertia::render('Admin/Products/Index', [
            'products' => $products,
            'filters' => [
                'search' => $search,
            ],
        ]);
    }

    public function create(): Response
    {
        $categories = $this->categoryRepository->getAll();

        return Inertia::render('Admin/Products/Create', [
            'categories' => $categories,
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'category_id' => ['nullable', 'exists:categories,id'],
            'category' => ['nullable', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
            'image' => ['nullable', 'file', 'image', 'max:5120'],
            'image_path' => ['nullable', 'string', 'max:500'],
            'highlights' => ['nullable', 'array'],
            'highlights.*.icon' => ['nullable', 'string'],
            'highlights.*.label' => ['required', 'string'],
            'specifications' => ['nullable', 'array'],
            'is_active' => ['boolean'],
        ]);

        $data = $validated;
        
        if (empty($data['image']) && !empty($request->input('image_url_input'))) {
            $data['image_path'] = $request->input('image_url_input');
        }

        $this->productRepository->create($data);

        return redirect()->route('admin.products.index')
            ->with('success', 'Produk berhasil ditambahkan!');
    }

    public function edit(int $id): Response
    {
        $product = $this->productRepository->findById($id);

        if (!$product) {
            abort(404);
        }

        $categories = $this->categoryRepository->getAll();

        return Inertia::render('Admin/Products/Edit', [
            'product' => $product,
            'categories' => $categories,
        ]);
    }

    public function update(Request $request, int $id): RedirectResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'category_id' => ['nullable', 'exists:categories,id'],
            'category' => ['nullable', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
            'image' => ['nullable', 'file', 'image', 'max:5120'],
            'image_path' => ['nullable', 'string', 'max:500'],
            'highlights' => ['nullable', 'array'],
            'highlights.*.icon' => ['nullable', 'string'],
            'highlights.*.label' => ['required', 'string'],
            'specifications' => ['nullable', 'array'],
            'is_active' => ['boolean'],
        ]);

        $data = $validated;

        if (empty($data['image']) && $request->has('image_url_input') && !empty($request->input('image_url_input'))) {
            $data['image_path'] = $request->input('image_url_input');
        }

        $this->productRepository->update($id, $data);

        return redirect()->route('admin.products.index')
            ->with('success', 'Produk berhasil diperbarui!');
    }

    public function destroy(int $id): RedirectResponse
    {
        $this->productRepository->delete($id);

        return redirect()->route('admin.products.index')
            ->with('success', 'Produk berhasil dihapus.');
    }
}
