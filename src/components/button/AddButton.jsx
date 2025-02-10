import React from "react";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

export const AddButton = ({ children }) => {
  return (
    <Button
      className="bg-primary rounded hover:cursor-pointer hover:bg-primary/90 "
      size="sm"
    >
      <Plus />
      {children}
    </Button>
  );
};
