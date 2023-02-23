import React, { useState } from "react";
import { ModalBase } from "../components/ModalBase";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const Dialog = () => <ModalBase isOpen={isOpen} onClosed={close} />;

  return {
    isOpen,
    Dialog,
    open,
    close,
  };
};
