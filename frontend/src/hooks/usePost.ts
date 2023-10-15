import { fetcher } from "@/api/card/fetcher"
import useSWR from "swr"

export function usePost() {
  const { data, error, isLoading } = useSWR("/api/posts", fetcher)

  return {
    post: data,
    isError: error,
    isLoading
  }
}