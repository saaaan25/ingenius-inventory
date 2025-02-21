import React from "react";
import {Pencil } from "lucide-react";
import { useState } from "react";
import { EditUserDialog } from "@/components/users";

export const EditUserButton = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="cursor-pointer"onClick={() => setOpen(true)}>
        <Pencil />
      </div>
      <EditUserDialog open={open} setOpen={setOpen} />
    </div>
  );
};
