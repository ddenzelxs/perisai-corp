<?php

namespace App\Http\Controllers;

use App\Repositories\Contracts\CategoryRepositoryInterface;
use App\Repositories\Contracts\ProductRepositoryInterface;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function __construct(
        protected ProductRepositoryInterface $productRepository,
        protected CategoryRepositoryInterface $categoryRepository
    ) {}

    public function index(): Response
    {
        $allActive = $this->productRepository->getAllActive();

        $featuredProducts = $allActive
            ->groupBy(function ($product) {
                return $product->category_id ?? 'uncategorized';
            })
            ->flatMap(function ($products) {
                return $products->take(3);
            })
            ->values();

        $categories = $this->categoryRepository->getAll();

        return Inertia::render('Home', [
            'featuredProducts' => $featuredProducts,
            'categories' => $categories,
        ]);
    }

    public function about(): Response
    {
        return Inertia::render('About');
    }

    public function facilities(): Response
    {
        return Inertia::render('Facilities');
    }

    public function whatWeDo(): Response
    {
        return Inertia::render('WhatWeDo');
    }
}
