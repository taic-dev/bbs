import axios, { isAxiosError } from "axios";

export async function deletePost(postId: number) {
  try {
    const res = await axios.delete(
      `${process.env.NEXT_PUBLIC_ENDPOINT}/posts/${postId}`,
      { data: { id: postId } }
    );
  } catch (e) {
    if (isAxiosError(e) && e.response) {
      console.log("Error: ", e);
    }
  }
}
