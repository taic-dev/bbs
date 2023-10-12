import { Box, Modal, Typography } from "@mui/material";
import { ReactElement } from "react";
import styled from "@emotion/styled";

type Props = {
  title: string;
  open: boolean;
  onClose: () => void;
  children: ReactElement;
};

export function NormalModal({ title, open, onClose, children }: Props) {
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

  const ModalTitle = styled.div`
    margin-bottom: 30px;
  `

  return (
    <Modal
      open={open}
      onClose={onClose}
    >
      <ModalWrapper>
        <ModalTitle>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            { title }
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            下記項目を入力してください
          </Typography>
        </ModalTitle>
        {children}
      </ModalWrapper>
    </Modal>
  );
}
