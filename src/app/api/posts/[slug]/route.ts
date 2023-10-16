import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params } : { params: { slug: string } }
) {
  console.log(params.slug);

  const res = await axios
    .get(`${process.env.WP_ENDPOINT}/posts/${params.slug}` as string)
    .then((response) => response.data);
  return NextResponse.json(res);
}
