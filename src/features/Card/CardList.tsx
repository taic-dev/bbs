"use client";

import { useState } from "react";
import styled from "@emotion/styled";
import { MediaCard } from "@/components/elements/Card/MediaCard";
import { CARD_LIST_DUMMY_DATA } from "@/constants/dummyData";
import { ConfirmModal } from "@/components/elements/Modal/ConfirmModal";

const CardWrapper = styled.div`
  padding-bottom: 50px;
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

export function CardList() {

  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false)

  const handleClickEdit = () => {
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
          onClickEdit={handleClickEdit}
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
    </CardWrapper>
  );
}

