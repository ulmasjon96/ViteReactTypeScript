import { useQuery } from "@tanstack/react-query";
import { api } from "../Services/apiClient";

export const useFetch = (url: string) =>
  useQuery({
    queryKey: [url],
    queryFn: async () => (await api.get(url)).data,
  });
