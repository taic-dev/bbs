import { fetcher } from "@/api/post/fetcher"
import useSWR from "swr"

export function usePost(id?: string) {
  const postId = id ? id : ""
  const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_ENDPOINT}/posts/${postId}`, fetcher)

  return {
    posts: data,
    isError: error,
    isLoading
  }
}