import { MouseEvent, ReactNode } from "react"
import { Button } from "@mui/material"
import { SxProps } from '@mui/material/styles';

type Props<T> = {
  variant: 'text' | 'outlined' | 'contained'
  text: string
  endIcon?: ReactNode
  id?: T
  sx?: SxProps
  type?: 'submit' | 'reset' | 'button'
  size?: 'small' | "medium" | "large"
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

export function NormalButton<T extends number>({
  type,
  variant,
  text,
  onClick,
  size,
  endIcon,
  id,
  sx
}: Props<T>) {
  return (
    <Button
      type={type}
      variant={variant}
      endIcon={endIcon}
      id={id?.toString()}
      onClick={(e) => onClick?.(e)}
      size={size}
      sx={sx}
    >
      {text}
    </Button>
  )
}