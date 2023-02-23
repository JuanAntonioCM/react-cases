import React from "react";
import { useModal } from "../../../hooks/useModal";

export const SettingsButton = () => {
  const { Dialog, open } = useModal();

  return (
    <>
      <button onClick={open}>Open Settings</button>
      <Dialog />
    </>
  );
};
