import styled from "@emotion/styled";

import { NormalButton } from "@/components/elements/Button/NormalButton";
import { FormControl, TextField } from "@mui/material";

export function FormEditor() {
  const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 40px;
  `;

  const FormGroup = styled(FormControl)`
    width: 100%;
  `;

  return (
    <Form action="">
      <FormGroup>
        <TextField label="タイトル" variant="outlined" sx={{ width: "100%" }} />
      </FormGroup>
      <FormGroup>
        <TextField label="説明" rows={7} multiline />
      </FormGroup>
      <NormalButton
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
