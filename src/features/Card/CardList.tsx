"use client";

import { MouseEvent, useState } from "react";
import styled from "@emotion/styled";
import { MediaCard } from "@/components/elements/Card/MediaCard";
import { ConfirmModal } from "@/components/elements/Modal/ConfirmModal";
import { FormEditor } from "../Form/FormEditor";
import { NormalModal } from "@/components/elements/Modal/NormalModal";
import { PostsData } from "@/types"
import { usePost } from "@/hooks/usePost";

const CardWrapper = styled.div`
  padding-bottom: 50px;
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

export function CardList() {
  const { posts, isError, isLoading } = usePost()

  console.log(posts)

  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false)
  const [openEditModal, setOpenEditModal] = useState<boolean>(false)
  const [initialValue, setInitialValue] = useState<PostsData[]>([])

  const handleClickEdit = (e: MouseEvent<HTMLButtonElement>) => {
    const cardId = (e.target as HTMLButtonElement).id
    const cardListData = posts.filter((cardData: PostsData) => {
      return cardData.id === Number(cardId)
    })
    setOpenEditModal(true)
    setInitialValue(cardListData)
  }

  const handleClickDelete = (e: MouseEvent<HTMLButtonElement>) => {
    console.log((e.target as HTMLButtonElement).id)
    setOpenDeleteModal(true)
  }

  if(isLoading) return  <p>...Loading</p>

  return (
    <CardWrapper>
      {posts.map(({ id, title, text, image_url }: PostsData) => (
        <MediaCard
          key={id}
          id={id}
          title={title}
          text={text}
          image_url={image_url}
          onClickEdit={(e) => handleClickEdit(e)}
          onClickDelete={(e) => handleClickDelete(e)}
        />
      ))}
      <ConfirmModal
        title="本当に削除しますか？"
        text="削除すると復元することができません。"
        open={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        doExecution={() => setOpenDeleteModal(false)}
      />
      <NormalModal
        title="記事編集"
        open={openEditModal}
        onClose={() => setOpenEditModal(false)}
      >
        <FormEditor initialValue={initialValue} />
      </NormalModal>
    </CardWrapper>
  );
}

