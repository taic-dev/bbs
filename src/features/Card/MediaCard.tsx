import { useState } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { NormalButton } from "../../components/elements/Button/NormalButton";
import { htmlExclusionsAndTextExcerpts } from "@/utils";
import { deletePost } from "@/api/posts/deletePost";
import { ConfirmModal } from "@/components/elements/Modal/ConfirmModal";
import { NormalModal } from "@/components/elements/Modal/NormalModal";
import { FormEditor } from "../Form/FormEditor";
import { PostData } from "@/types";
import { editPost } from "@/api/posts/editPost";

export function MediaCard({ postData }: { postData: PostData }) {
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);

  const handleDeletePost = async (postId: number) => {
    await deletePost(postId);
    setOpenDeleteModal(false);
  };

  const handleEditPost = async (editData: PostData) => {
    await editPost(editData);
    setOpenEditModal(false);
  };

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
      <CardMedia
        sx={{ height: 140 }}
        image={postData.image_url ? postData.image_url : "../img/not-found.png"}
        title={postData.title}
        component="img"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {postData.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {htmlExclusionsAndTextExcerpts(postData.text, 150)}
        </Typography>
      </CardContent>
      <CardButtonWrapper>
        <Link href={`/card/${postData.id}`}>
          <NormalButton size="small" variant="text" text="detail" />
        </Link>
        <div>
          <NormalButton
            size="small"
            variant="text"
            text="edit"
            sx={{
              color: "#00B16B",
              ":hover": { backgroundColor: "rgba(0,	177,	107, 0.04)" },
            }}
            onClick={() => setOpenEditModal(true)}
          />
          <NormalButton
            size="small"
            variant="text"
            text="delete"
            sx={{
              color: "#ED1A3D",
              ":hover": { backgroundColor: "rgba(237,	26,	61, 0.04)" },
            }}
            onClick={() => setOpenDeleteModal(true)}
          />
        </div>
      </CardButtonWrapper>
      <ConfirmModal
        postId={postData.id}
        title="本当に削除しますか？"
        text="削除すると復元することができません。"
        open={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        doExecution={() => handleDeletePost(postData.id)}
      />
      <NormalModal
        title="記事編集"
        open={openEditModal}
        onClose={() => setOpenEditModal(false)}
      >
        <FormEditor
          initialValue={postData}
          onSubmit={(editData) => handleEditPost(editData)}
        />
      </NormalModal>
    </CardMain>
  );
}
