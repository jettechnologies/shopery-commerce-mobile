const BASE_URL =
  process.env.EXPO_PUBLIC_API_URL || "http://localhost:8000/api/v1";

interface RequestConfig extends RequestInit {
  token?: string;
  params?: Record<string, string | number | undefined>;
}

export const fetchClient = async <T>(
  endpoint: string,
  { token, params, headers, ...customConfig }: RequestConfig = {},
): Promise<T> => {
  const config = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
    ...customConfig,
  };

  let url = `${BASE_URL}${endpoint}`;
  if (params) {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        searchParams.append(key, String(value));
      }
    });
    url += `?${searchParams.toString()}`;
  }

  const response = await fetch(url, config);
  const data = await response.json();

  if (response.ok) {
    return data as T;
  } else {
    return Promise.reject(data);
  }
};
