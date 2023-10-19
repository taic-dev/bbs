import { PostData } from "@/types";
import axios, { isAxiosError } from "axios"

export const editPost = async (postData: PostData) => {
  try {
    const res = await axios.patch(
      `${process.env.NEXT_PUBLIC_ENDPOINT}/posts/${postData.id}`,
      postData
    )
  } catch (e) {
    if (isAxiosError(e) && e.response) {
      console.log("Error: ", e);
    }
  }
}