import React from "react";
import { useState } from "react";
import { AddButton } from "@/components/button";
import { RegisterUserDialog } from "@/components/users";

export const RegisterUserButton = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <AddButton onClick={() => setOpen(true)}>Registrar usuario</AddButton>
      <RegisterUserDialog open={open} setOpen={setOpen} />
    </>
  );
};
