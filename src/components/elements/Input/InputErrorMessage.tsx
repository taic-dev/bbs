import styled from "@emotion/styled";
import { FieldErrors, FieldValues } from "react-hook-form";

type Props<T extends FieldValues> = {
  name: string
  errors: FieldErrors<T>;
};

export function InputErrorMessage<T extends FieldValues>({ name, errors }: Props<T>) {
  const ErrorMessage = styled.p`
    margin-top: 5px;
    color: #d32f2f;
    font-size: 0.8rem;
  `;

  return (
    <ErrorMessage>
      {Boolean(errors[name]?.message) && errors[name]?.message?.toString()}
    </ErrorMessage>
  );
}
