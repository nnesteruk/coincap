import { useState } from "react";

export const useBasicModal = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  return { open, setOpen, handleClose };
};
