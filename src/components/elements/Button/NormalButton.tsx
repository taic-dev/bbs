import styled from "@emotion/styled";
import { MouseEvent, ReactNode } from "react";
import { Button } from "@mui/material";

type ButtonStyleType = "white" | "green" | "red" | "black";
type ButtonSize = "small" | "medium" | "large";

type Props<T> = {
  id?: T;
  text: string;
  endIcon?: ReactNode;
  buttonStyle?: ButtonStyleType;
  buttonSize?: ButtonSize;
  variant: "text" | "outlined" | "contained";
  type?: "submit" | "reset" | "button";
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

const buttonStyles: {
  [key: string]: { mainColor: string; subColor: string };
} = {
  white: { mainColor: "#fff", subColor: "#333" },
  green: { mainColor: "#00B16B", subColor: "#fff" },
  red: { mainColor: "#ED1A3D", subColor: "#fff" },
  black: { mainColor: "#333", subColor: "#fff" },
};

const buttonSizes: {
  [key: string]: { fontSize: string; padding: string };
} = {
  small: { fontSize: "12px", padding: "0.1rem 0.5rem" },
  medium: { fontSize: "15px", padding: "0.5rem 1.5rem" },
  large: { fontSize: "20px", padding: "1rem 2rem" },
};

const CustomMuiButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "buttonStyle" && prop !== "buttonSize",
})<{
  buttonStyle: ButtonStyleType;
  buttonSize: ButtonSize;
}>`
  ${({ buttonStyle, buttonSize }) => `
    color: ${buttonStyles[buttonStyle].mainColor};
    font-size: ${buttonSizes[buttonSize].fontSize};
    padding: ${buttonSizes[buttonSize].padding};
    background-color: ${buttonStyles[buttonStyle].subColor};
    &:hover {
      color: ${buttonStyles[buttonStyle].subColor};
      background-color: ${buttonStyles[buttonStyle].mainColor};
    }`}
`;

export function NormalButton<T extends number>({
  id,
  text,
  endIcon,
  type,
  variant,
  onClick,
  buttonStyle = "white",
  buttonSize = "medium",
}: Props<T>) {
  return (
    <CustomMuiButton
      buttonStyle={buttonStyle}
      buttonSize={buttonSize}
      type={type}
      variant={variant}
      endIcon={endIcon}
      id={id?.toString()}
      onClick={(e) => onClick?.(e)}
    >
      {text}
    </CustomMuiButton>
  );
}
