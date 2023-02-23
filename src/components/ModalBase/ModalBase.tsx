/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

const modalBodyCss = css`
  position: fixed;
  z-index: 999;
  background: #fff;
  top: 30px;
  bottom: 30px;
  width: 30%;
  left: 50%;
  margin-left: -15%;
  border-radius: 10px;
  padding: 40px;
  overflow: auto;
`;

const modalBlanketCss = css`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 900;
  background: rgba(0, 0, 0, 0.1);
`;

type Props = {
  isOpen: boolean;
  onClosed: () => void;
};

export const ModalBase = ({ isOpen, onClosed }: Props) => {
  return isOpen ? (
    <>
      <div css={modalBlanketCss} onClick={onClosed} />
      <div css={modalBodyCss}>Modal Content</div>
    </>
  ) : null;
};
