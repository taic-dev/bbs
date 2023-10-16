import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { NormalTextField } from "@/components/elements/Input/NormalTextField";
import { NormalButton } from "@/components/elements/Button/NormalButton";
import { FormControl, TextField } from "@mui/material";
import { FormEditorType } from "./types";
import { FormEditorSchema } from "./schema";
import { InputErrorMessage } from "@/components/elements/Input/InputErrorMessage";
import { PostsData } from "@/types";

type Props = {
  initialValue?: PostsData[];
  onSubmit: (formData: FormEditorType) => void;
};

export function FormEditor({ initialValue, onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormEditorType>({
    mode: "onSubmit",
    reValidateMode: "onBlur",
    resolver: zodResolver(FormEditorSchema),
    defaultValues: initialValue && {
      title: initialValue[0].title.rendered,
      content: initialValue[0].content.rendered,
    },
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
    <Form action="" onSubmit={handleSubmit(() => onSubmit(getValues()))}>
      <FormGroup>
        <NormalTextField
          name="title"
          label="タイトル"
          register={register}
          errors={errors}
        />
        <InputErrorMessage name="title" errors={errors} />
      </FormGroup>

      <FormGroup>
        <TextField
          label="説明"
          rows={7}
          multiline
          {...register("content")}
          error={Boolean(errors.content?.message)}
        />
        <InputErrorMessage name="content" errors={errors} />
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
      />
    </Form>
  );
}
