import { useMutation, queryOptions } from "@tanstack/react-query";
import { fetchClient } from "@utils/api-client";
import { useToastContext } from "@hooks/context";
import { QUERY_KEYS } from "../query-keys";

export interface CartItem {
  productId: string;
  quantity: number;
  // Add product details if included in response
}

export interface AddToCartPayload {
  productId: string;
  quantity: number;
}

export interface UpdateCartPayload {
  quantity: number;
}

// API Functions
export const getCart = async () => {
  return fetchClient<CartItem[]>("/cart"); // Adjust return type if wrapped
};

export const addToCart = async (data: AddToCartPayload) => {
  return fetchClient("/cart", {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const updateCartItem = async (
  productId: string,
  data: UpdateCartPayload,
) => {
  return fetchClient(`/cart/${productId}`, {
    method: "PATCH",
    body: JSON.stringify(data),
  });
};

export const removeFromCart = async (productId: string) => {
  return fetchClient(`/cart/${productId}`, {
    method: "DELETE",
  });
};

// Queries
export const getCartQueryOptions = () =>
  queryOptions({
    queryKey: QUERY_KEYS.cart.mine(),
    queryFn: getCart,
  });

// Mutations
export const useAddToCart = () => {
  const { openToast } = useToastContext();
  return useMutation({
    mutationFn: addToCart,
    meta: {
      successMessage: "Added to cart",
      errorMessage: "Failed to add to cart",
      invalidatesQuery: QUERY_KEYS.cart.mine(),
    },
    onSuccess: (data) => {
      openToast("Item added to cart", "success");
    },
  });
};

export const useUpdateCartItem = () => {
  const { openToast } = useToastContext();
  return useMutation({
    mutationFn: ({
      productId,
      data,
    }: {
      productId: string;
      data: UpdateCartPayload;
    }) => updateCartItem(productId, data),
    meta: {
      invalidatesQuery: QUERY_KEYS.cart.mine(),
      errorMessage: "Failed to update cart",
    },
  });
};

export const useRemoveFromCart = () => {
  const { openToast } = useToastContext();
  return useMutation({
    mutationFn: removeFromCart,
    meta: {
      invalidatesQuery: QUERY_KEYS.cart.mine(),
      successMessage: "Item removed from cart",
    },
    onSuccess: () => {
      openToast("Item removed", "success");
    },
  });
};
