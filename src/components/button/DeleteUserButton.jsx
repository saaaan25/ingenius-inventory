import React from 'react'
import { Trash2 } from "lucide-react";
import { useState } from "react";
import { DeleteUserDialog } from "@/components/users";

export const DeleteUserButton = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div onClick={() => setOpen(true)}>
      <Trash2 />
      </div>
      <DeleteUserDialog open={open} setOpen={setOpen} />
    </div>
  );
}
