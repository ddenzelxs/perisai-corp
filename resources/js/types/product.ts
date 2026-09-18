export interface HighlightItem {
    icon?: string;
    label: string;
}

export type SpecificationMap = Record<string, string>;

export interface Category {
    id: number;
    name: string;
    slug: string;
    description?: string | null;
    products_count?: number;
}

export interface Product {
    id: number;
    category_id?: number | null;
    name: string;
    slug: string;
    category?: string | null;
    category_relation?: Category | null;
    description?: string | null;
    image_path?: string | null;
    image_url?: string | null;
    highlights?: HighlightItem[] | null;
    specifications?: SpecificationMap | null;
    is_active: boolean;
    created_at?: string;
    updated_at?: string;
}

export interface User {
    id: number;
    name: string;
    email: string;
}

export interface PageProps<T = Record<string, unknown>> {
    auth: {
        user: User | null;
    };
    flash: {
        success?: string | null;
        error?: string | null;
    };
    [key: string]: unknown;
}

export interface PaginatedData<T> {
    data: T[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    links: {
        url: string | null;
        label: string;
        active: boolean;
    }[];
}
