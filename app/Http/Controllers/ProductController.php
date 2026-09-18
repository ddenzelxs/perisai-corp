<?php

namespace App\Http\Controllers;

use App\Repositories\Contracts\CategoryRepositoryInterface;
use App\Repositories\Contracts\ProductRepositoryInterface;
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
        $categorySlug = $request->input('category');
        $products = $this->productRepository->getAllActive($categorySlug);
        $categories = $this->categoryRepository->getAll();

        return Inertia::render('Products/Index', [
            'products' => $products,
            'categories' => $categories,
            'currentCategory' => $categorySlug,
        ]);
    }

    public function show(string $slug): Response
    {
        $product = $this->productRepository->findBySlug($slug);

        if (!$product || !$product->is_active) {
            abort(404);
        }

        return Inertia::render('Products/Show', [
            'product' => $product,
        ]);
    }
}
