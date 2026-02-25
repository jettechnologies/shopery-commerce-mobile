import { fetchClient } from "@/utils/api-client";
import { queryOptions } from "@tanstack/react-query";
import { QUERY_KEYS, type ProductFilterParams } from "../query-keys";

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
  slug?: string;
  // Add other fields as needed based on backend
}

export interface ProductResponse {
  data: Product[];
  meta: {
    total: number;
    page: number;
    limit: number;
  };
}

// API Functions
export const getProducts = async (params?: ProductFilterParams) => {
  return fetchClient<ProductResponse>("/products", {
    params: params as Record<string, string | number | undefined>,
  });
};

export const getProductById = async (id: string) => {
  return fetchClient<Product>(`/products/${id}`);
};

export const getProductBySlug = async (slug: string) => {
  return fetchClient<Product>(`/products/slug/${slug}`);
};

// Query Options
export const getProductsQueryOptions = (params?: ProductFilterParams) =>
  queryOptions({
    queryKey: QUERY_KEYS.products.all(params),
    queryFn: () => getProducts(params),
  });

export const getProductByIdQueryOptions = (id: string) =>
  queryOptions({
    queryKey: QUERY_KEYS.products.detail(id),
    queryFn: () => getProductById(id),
  });

export const getProductBySlugQueryOptions = (slug: string) =>
  queryOptions({
    queryKey: QUERY_KEYS.products.detail(slug),
    queryFn: () => getProductBySlug(slug),
  });
