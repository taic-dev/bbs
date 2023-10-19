import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { NormalTextField } from "@/components/elements/Input/NormalTextField";
import { NormalButton } from "@/components/elements/Button/NormalButton";
import { FormControl, TextField } from "@mui/material";
import { FormEditorType } from "./types";
import { FormEditorSchema } from "./schema";
import { InputErrorMessage } from "@/components/elements/Input/InputErrorMessage";
import { PostData } from "@/types";

type Props = {
  initialValue?: PostData;
  onSubmit?: (data: PostData) => void
};

export function FormEditor({ initialValue, onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormEditorType>({
    mode: "onSubmit",
    reValidateMode: "onBlur",
    resolver: zodResolver(FormEditorSchema),
    defaultValues: initialValue && initialValue
  });

  const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 40px;
  `;

  const FormGroup = styled(FormControl)`
    width: 100%;
  `;

  const handleSubmitFormEditor = async () => {
    const formValues = getValues()
    onSubmit && onSubmit(formValues)
    console.log("submit");
  };

  return (
    <Form onSubmit={handleSubmit(handleSubmitFormEditor)}>
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
          {...register("text")}
          error={Boolean(errors.text?.message)}
        />
        <InputErrorMessage name="text" errors={errors} />
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
