"use client";

import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import { NormalButton } from "../Button/NormalButton";

type Props = {
  postId: number;
  title: string;
  text: string;
  open: boolean;
  onClose: () => void;
  doExecution: (postId: number) => void;
};

export function ConfirmModal({
  postId,
  title,
  text,
  open,
  onClose,
  doExecution,
}: Props) {
  const ModalWrapper = styled(Box)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    background-color: #fff;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    padding: 3rem;
  `;

  const ButtonWrapper = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
  `;

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
      >
        <ModalWrapper>
          <Typography variant="h6" component="h2">
            {title}
          </Typography>
          <Typography sx={{ mt: 2 }}>{text}</Typography>
          <ButtonWrapper>
            <NormalButton
              variant="contained"
              text="cancel"
              sx={{
                padding: "0.5rem 1.5rem",
                color: "#333",
                backgroundColor: "#fff",
                ":hover": {
                  color: "#fff",
                  backgroundColor: "#333",
                  border: "none",
                },
              }}
              onClick={onClose}
            />
            <NormalButton
              size="small"
              variant="contained"
              text="OK"
              sx={{
                padding: "0.5rem 1.5rem",
                color: "#fff",
                backgroundColor: "#333",
                ":hover": { color: "#333", backgroundColor: "#fff" },
              }}
              onClick={() => doExecution(postId)}
            />
          </ButtonWrapper>
        </ModalWrapper>
      </Modal>
    </div>
  );
}
