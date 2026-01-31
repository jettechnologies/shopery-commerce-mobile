import { useMutation } from "@tanstack/react-query";
import { fetchClient } from "@utils/api-client";
import { useToastContext } from "@hooks/context";
import { QUERY_KEYS } from "../query-keys";

// Types derived from backend Swagger
export interface RegisterUser {
  email: string;
  password?: string;
  name: string;
}

export interface LoginUser {
  email: string;
  password?: string;
}

export interface AuthResponse {
  user: {
    id: string;
    email: string;
    role: string;
  };
  accessToken: string;
  refreshToken: string;
}

// API Functions
export const registerUser = async (data: RegisterUser) => {
  return fetchClient<AuthResponse>("/auth/register", {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const loginUser = async (data: LoginUser) => {
  return fetchClient<AuthResponse>("/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const logoutUser = async (refreshToken: string) => {
  return fetchClient("/auth/logout", {
    method: "POST",
    body: JSON.stringify({ refreshToken }),
  });
};

// Hooks
export const useRegister = () => {
  const { openToast } = useToastContext();
  return useMutation({
    mutationFn: registerUser,
    meta: {
      successMessage: "Registration successful",
      errorMessage: "Registration failed",
    },
    onSuccess: (data) => {
      // TODO: Handle token storage here if needed, or let the caller handle it
      openToast(`Welcome ${data.user.email}`, "success");
    },
  });
};

export const useLogin = () => {
  const { openToast } = useToastContext();
  return useMutation({
    mutationFn: loginUser,
    meta: {
      successMessage: "Login successful",
      errorMessage: "Login failed",
    },
    onSuccess: (data) => {
      openToast("Logged in successfully", "success");
    },
  });
};
