import React from "react";
import { UserForm } from "@/components/form";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  Dialog,
} from "@/components/ui/dialog";
import { useUsers } from "@/hooks";

export const RegisterUserDialog = ({ open, setOpen }) => {
  const { createUser } = useUsers();

  async function onSubmit(values) {
    console.log(values);
    await createUser(values);
    handleCloseDialog();
  }
  const handleCloseDialog = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[725px] px-10 py-8  flex flex-col gap-7">
        <DialogHeader>
          <DialogTitle>
            <DialogDescription className="text-primary text-lg">
              Registrar usuario
            </DialogDescription>
          </DialogTitle>
        </DialogHeader>
        <UserForm onSubmit={onSubmit} handleCloseDialog={handleCloseDialog} />
      </DialogContent>
    </Dialog>
  );
};
