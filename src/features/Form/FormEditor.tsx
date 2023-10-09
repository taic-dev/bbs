import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { NormalButton } from "@/components/elements/Button/NormalButton";
import { FormControl, TextField } from "@mui/material";
import { FormEditorType } from "./types";
import { FormEditorSchema } from "./schema";

export function FormEditor() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormEditorType>({
    resolver: zodResolver(FormEditorSchema),
  });

  const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 40px;
  `;

  const FormGroup = styled(FormControl)`
    width: 100%;
  `;

  return (
    <Form action="" onSubmit={handleSubmit(()=>{ console.log("submit") })}>
      <FormGroup>
        <TextField
          label="タイトル"
          variant="outlined"
          sx={{ width: "100%" }}
          {...register("title")}
          error={Boolean(errors.title?.message)}
        />
        {errors.title?.message && <p>{errors.title?.message}</p>}
      </FormGroup>
      <FormGroup>
        <TextField
          label="説明"
          rows={7}
          multiline
          {...register("text")}
          error={Boolean(errors.text?.message)}
        />
        {errors.text?.message && <p>{errors.text?.message}</p>}
      </FormGroup>
      <NormalButton
        type="submit"
        variant="contained"
        text="投稿"
        sx={{
          width: "100px",
          margin: "auto",
          padding: "0.5rem 1.5rem",
          backgroundColor: "#333",
          ":hover": { color: "#333", backgroundColor: "#fff" },
        }}
        // onClick={}
      />
    </Form>
  );
}
