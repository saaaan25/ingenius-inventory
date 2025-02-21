import React from "react";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  Dialog,
} from "@/components/ui/dialog";
import { useUser, useUsers } from "@/hooks";
import { AcceptButton, CancelButton } from "../button";

export const DeleteUserDialog = ({ open, setOpen }) => {
  const { selectedUser } = useUser();
  const { deleteUser } = useUsers();

  const handleCloseDialog = () => {
    setOpen(false);
  };
  const handleDelete = () => {
    deleteUser(selectedUser.id);
    setOpen(false);
  };

  return (
    selectedUser && (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[725px] px-10 py-8 h-[38vh] flex flex-col gap-7">
          <DialogHeader>
            <DialogTitle>Eliminar usuario</DialogTitle>
            <DialogDescription className="text-primary text-lg text-center mt-8">
              ¿Estás seguro que deseas eliminar el siguiente usuario: <br />
              <span className="font-semibold">
                {selectedUser.rol} - {selectedUser.nombre}{" "}
                {selectedUser.apellido} ?
              </span>
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center gap-x-10 mt-auto">
            <AcceptButton onClick={handleDelete}>Aceptar</AcceptButton>
            <CancelButton onClick={handleCloseDialog}>Cancelar </CancelButton>
          </div>
        </DialogContent>
      </Dialog>
    )
  );
};
