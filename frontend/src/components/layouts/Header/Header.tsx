"use client";

import { useState } from "react";
import styled from "@emotion/styled";
import { NormalButton } from "@/components/elements/Button/NormalButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { NormalModal } from "@/components/elements/Modal/NormalModal";
import { FormEditor } from "@/features/Form/FormEditor";
import axios from "axios";
import { useSWRConfig } from "swr";
import { FormEditorType } from "@/features/Form/types";

type Props = {
  pageTitle: string;
};

export function Header({ pageTitle }: Props) {
  const [openRegisterModal, setOpenRegisterModal] = useState<boolean>(false);
  const { mutate } = useSWRConfig()

  const handleSubmitFormEditor = async (formData: FormEditorType) => {
    const headers = {
      "Content-Type": "application/json",
      Authorization:
        "Basic " +
        Buffer.from(
          `${process.env.NEXT_PUBLIC_USER_NAME}:${process.env.NEXT_PUBLIC_PASSWORD}`
        ).toString("base64"),
    };
    const postData = { ...formData, status: "publish" };
    const res = await axios
      .post(`${process.env.NEXT_PUBLIC_WP_ENDPOINT}/posts`, postData, { headers })
      .then((res) => res.data);
    console.log(res, "submit");

    mutate(
      `${process.env.NEXT_PUBLIC_WP_ENDPOINT}/posts`,
      { ...res.data },
      false
    );

    setOpenRegisterModal(false)
  };

  const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 150px;
    padding: 0 1.5rem;
  `;

  const PageTitle = styled.h1`
    font-size: 3.5rem;
    font-weight: bold;
    letter-spacing: 6.5px;
  `;

  return (
    <Header>
      <PageTitle>{pageTitle}</PageTitle>
      <div>
        <NormalButton
          variant="contained"
          text="記事投稿"
          endIcon={<AddCircleOutlineIcon />}
          sx={{
            padding: "0.5rem 1.5rem",
            backgroundColor: "#333",
            ":hover": { color: "#333", backgroundColor: "#fff" },
          }}
          onClick={() => setOpenRegisterModal(true)}
        />
      </div>
      <NormalModal
        title="記事投稿"
        open={openRegisterModal}
        onClose={() => setOpenRegisterModal(false)}
      >
        <FormEditor onSubmit={(formData) => handleSubmitFormEditor(formData)} />
      </NormalModal>
    </Header>
  );
}
