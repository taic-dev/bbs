import axios, { isAxiosError } from "axios";

export async function createPost(newData: object) {
  try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_ENDPOINT}/posts`, newData)
    return res.data
  } catch (e) {
    if(isAxiosError(e) && e.response) {
      console.log("Error: ",e)
    }
  }
}