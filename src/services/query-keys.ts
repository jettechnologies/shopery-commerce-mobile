export interface PaginationParams {
  page?: number;
  limit?: number;
}

export interface ProductFilterParams extends PaginationParams {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  tags?: string;
  sortBy?: "price" | "rating" | "createdAt";
  sortOrder?: "asc" | "desc";
  cursor?: string;
}

export const QUERY_KEYS = {
  auth: {
    user: () => ["auth", "user"],
  },
  products: {
    all: (params?: PaginationParams) => ["products", "all", params],
    filter: (params?: ProductFilterParams) => ["products", "filter", params],
    detail: (idOrSlug: string) => ["products", "detail", idOrSlug],
  },
  cart: {
    mine: () => ["cart", "mine"],
  },
  profile: {
    me: () => ["profile", "me"],
  },
};
