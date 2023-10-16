import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const res = await axios
    .get(`${process.env.WP_ENDPOINT}/posts` as string)
    .then((response) => response.data);
  return NextResponse.json(res);
}

// TODO: next api router でpost処理を完成させる
// export async function POST(request: Request) {
//   const headers = {
//     "Content-Type": "application/json",
//     "Authorization":
//       "Basic " +
//       Buffer.from(
//         `${process.env.USER_NAME}:${process.env.PASSWORD}`
//       ).toString("base64"),
//   };

//   console.log("---------------------------",request.body)

//   const postData = {title: "キウイ", content: "テストコンテンツ", status:"publish"};
//   const res = await axios.post(
//     `${process.env.WP_ENDPOINT}/posts`,
//     postData,
//     { headers }
//   );

//   return NextResponse.json(res);
// }
