import { z } from "zod";

export const FormEditorSchema = z.object({
  title: z
    .string()
    .min(1, { message: "1文字以上を入力してください" })
    .max(10, { message: "10文字以下を入力してください" }),
  content: z
    .string()
    .min(10, { message: "10文字以上で入力してください" })
    .max(1000, { message: "1000文字以下で入力してください" }),
});
