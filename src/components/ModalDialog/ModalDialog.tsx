import React, { useState } from "react";
import { ModalBase } from "../ModalBase";

type Props = {
  trigger: React.ReactNode;
};

export const ModalDialog = ({ trigger }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div onClick={() => setIsOpen(true)}>{trigger}</div>
      <ModalBase isOpen={isOpen} onClosed={() => setIsOpen(false)} />
    </>
  );
};
