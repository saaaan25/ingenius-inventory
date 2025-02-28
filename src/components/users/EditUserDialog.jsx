import React from "react";
import { DialogContent, DialogHeader, DialogTitle, DialogDescription, Dialog } from "@/components/ui/dialog";
import { useUsers } from "@/hooks";
import { UserForm } from "@/components/form";

export const EditUserDialog = ({ open, setOpen }) => {
  const {updateUser, selectedUser} = useUsers();

  async function onSubmit(values) {
    console.log(values);
    await updateUser(values);
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
              Editar usuario
            </DialogDescription>
          </DialogTitle>
        </DialogHeader>
        <UserForm defaultUser={selectedUser} onSubmit={onSubmit} handleCloseDialog={handleCloseDialog}  />
      </DialogContent>
    </Dialog>
  );
};
