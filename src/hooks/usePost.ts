import { fetcher } from "@/api/post/fetcher"
import useSWR from "swr"

export function usePost(id?: string) {
  const postId = id ? id : ""
  const { data, error, isLoading } = useSWR(`/api/posts/${postId}`, fetcher)

  return {
    post: data,
    isError: error,
    isLoading
  }
}