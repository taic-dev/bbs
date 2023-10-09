import { ReactNode } from "react"
import { Button } from "@mui/material"
import { SxProps } from '@mui/material/styles';

type Props = {
  variant: 'text' | 'outlined' | 'contained'
  text: string
  endIcon?: ReactNode
  sx?: SxProps
  type?: 'submit' | 'reset' | 'button'
  size?: 'small' | "medium" | "large"
  onClick?: () => void
}

export function NormalButton({
  type,
  variant,
  text,
  onClick,
  size,
  endIcon,
  sx
}: Props) {
  return (
    <Button
      type={type}
      variant={variant}
      endIcon={endIcon}
      onClick={onClick}
      size={size}
      sx={sx}
    >
      {text}
    </Button>
  )
}