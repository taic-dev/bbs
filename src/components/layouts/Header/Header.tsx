"use client";

import styled from "@emotion/styled";
import { NormalButton } from "@/components/elements/Button/NormalButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

type Props = {
  pageTitle: string;
};

export function Header({ pageTitle }: Props) {
  const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 115px;
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
          text="新規登録"
          endIcon={<AddCircleOutlineIcon />}
          sx={{
            padding: "0.5rem 1.5rem",
            backgroundColor: "#333",
            ":hover": { color: "#333",backgroundColor: "#fff" },
          }}
        />
      </div>
    </Header>
  );
}
