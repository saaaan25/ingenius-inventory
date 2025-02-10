import React from "react";
import { Button } from "../ui/button";
import { Pencil } from "lucide-react";

export const EditButton = ({ children }) => {
  return (
    <Button
      className="bg-primary rounded hover:cursor-pointer hover:bg-primary/90"
      size="sm"
    >
      <Pencil />
      {children}
    </Button>
  );
};
