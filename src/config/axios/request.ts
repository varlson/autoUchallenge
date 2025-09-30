import axios from "axios";
import ApiRequest from "./config";

export type RequestT = {
  method?: "get" | "post";
  data?: FormData;
  url: string;
  headers?: Record<string, string>;
  params?: Record<string, unknown>;
};

export type SuccessResponse<T> = { success: true; data: T };
export type ErrorResponse = { success: false; error: string };

export async function MakeRequest<TSuccess>({
  method = "get",
  url,
  data,
  headers,
  params,
}: RequestT): Promise<SuccessResponse<TSuccess> | ErrorResponse> {
  const updatedHeader = {
    ...headers,
    ...(method === "post" ? { "Content-Type": "multipart/form-data" } : {}),
  };
  try {
    const config = {
      url,
      method,
      headers: {
        ...ApiRequest.defaults.headers,
        ...updatedHeader,
      },
      params,
    };

    if (method == "post") {
      Object.assign(config, { data });
    }

    const response = await ApiRequest[method](url);
    return { success: true, data: response.data };
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return { success: false, error: error.message };
    }
    return { success: false, error: "Erro desconhecido" };
  }
}
