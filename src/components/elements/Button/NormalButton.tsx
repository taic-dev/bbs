import { ReactNode } from "react"
import { Button } from "@mui/material"
import { SxProps } from '@mui/material/styles';

type Props = {
  variant: 'text' | 'outlined' | 'contained'
  text: string
  endIcon?: ReactNode
  sx?: SxProps
  size?: 'small' | "medium" | "large"
  onClick?: () => void
}

export function NormalButton({
  variant,
  text,
  onClick,
  size,
  endIcon,
  sx
}: Props) {
  return (
    <Button
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