import React from "react";
import { Button } from "../ui/button";

export const AcceptButton = ({ children }) => {
  return (
    <Button
      className="bg-white text-green-500 border border-green-500 rounded hover:cursor-pointer hover:bg-green-50 py-4 px-7"
      size="sm"
    >
      {children}
    </Button>
  );
};
