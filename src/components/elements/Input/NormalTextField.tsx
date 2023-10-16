import {
  Path,
  UseFormRegister,
  FieldValues,
  FieldErrors,
} from "react-hook-form";
import { TextField } from "@mui/material";

type Props<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  register: UseFormRegister<T>;
  errors: FieldErrors<FieldValues>;
};

export function NormalTextField<T extends FieldValues>({
  name,
  label,
  errors,
  register,
}: Props<T>) {

  return (
    <TextField
      label={label}
      variant="outlined"
      sx={{ width: "100%" }}
      error={Boolean(errors.title?.message)}
      {...register(name)}
    />
  );
}
