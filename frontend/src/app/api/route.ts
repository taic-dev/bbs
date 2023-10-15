import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const res = await axios
    .get(process.env.WP_ENDPOINT as string)
    .then((response) => response.data);
  return NextResponse.json(res);
}
