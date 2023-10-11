"use client";

import { MouseEvent, useState } from "react";
import styled from "@emotion/styled";
import { MediaCard } from "@/components/elements/Card/MediaCard";
import { CARD_LIST_DUMMY_DATA } from "@/constants/dummyData";
import { ConfirmModal } from "@/components/elements/Modal/ConfirmModal";
import { FormEditor } from "../Form/FormEditor";
import { NormalModal } from "@/components/elements/Modal/NormalModal";

const CardWrapper = styled.div`
  padding-bottom: 50px;
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

export function CardList() {

  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false)
  const [openEditModal, setOpenEditModal] = useState<boolean>(false)

  const handleClickEdit = (e: MouseEvent<HTMLButtonElement>) => {
    console.log((e.target as HTMLButtonElement).id)
    setOpenEditModal(true)
    // TODO: idの内容を元に投稿情報を割り当ててinputに初期値を追加
    // TODO: 新規登録のモーダルを使いまわして作成する
  }

  const handleClickDelete = () => {
    console.log("delete!!")
    // TODO: 削除機能を作成
  }

  return (
    <CardWrapper>
      {CARD_LIST_DUMMY_DATA.map(({ id, title, text, image_url }) => (
        <MediaCard
          key={id}
          id={id}
          title={title}
          text={text}
          image_url={image_url}
          onClickEdit={(e) => handleClickEdit(e)}
          onClickDelete={() => setOpenDeleteModal(true)}
        />
      ))}
      <ConfirmModal
        title="本当に削除しますか？"
        text="削除すると復元することができません。"
        open={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        doExecution={handleClickDelete}
      />
      <NormalModal
        title="記事編集"
        open={openEditModal}
        onClose={() => setOpenEditModal(false)}
      >
        <FormEditor />
      </NormalModal>
    </CardWrapper>
  );
}

