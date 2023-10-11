import { MouseEvent } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { NormalButton } from "../Button/NormalButton";

type Props = {
  id: number;
  title: string;
  text: string;
  image_url: string;
  onClickEdit: (e: MouseEvent<HTMLButtonElement>) => void;
  onClickDelete: () => void;
};

export function MediaCard({
  id,
  title,
  text,
  image_url,
  onClickDelete,
  onClickEdit,
}: Props) {
  const CardMain = styled(Card)`
    width: calc(50% - 1.5rem / 2);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  `;

  const CardButtonWrapper = styled(CardActions)`
    justify-content: space-between;
  `;

  return (
    <CardMain>
      <CardMedia sx={{ height: 140 }} image={image_url} title={title} component='img' />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardButtonWrapper>
        <Link href={`/card/${id}`}>
          <NormalButton size="small" variant="text" text="detail" />
        </Link>
        <div>
          <NormalButton
            id={id}
            size="small"
            variant="text"
            text="edit"
            sx={{
              color: "#00B16B",
              ":hover": { backgroundColor: "rgba(0,	177,	107, 0.04)" },
            }}
            onClick={(e) => onClickEdit(e)}
          />
          <NormalButton
            size="small"
            variant="text"
            text="delete"
            sx={{
              color: "#ED1A3D",
              ":hover": { backgroundColor: "rgba(237,	26,	61, 0.04)" },
            }}
            onClick={onClickDelete}
          />
        </div>
      </CardButtonWrapper>
    </CardMain>
  );
}
