import React from "react";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ChevronsUpDown } from "lucide-react";
import { SuppliesListForm } from "@/components/form";
import { AddSupplyPopover } from "@/components/form";

export const SuppliesFormItem = ({ field, form }) => {
  return (
    <FormItem className="flex flex-col">
      <FormLabel>Útiles</FormLabel>
      <Popover>
        <PopoverTrigger asChild>
          <FormControl>
            <Button
              variant="outline"
              className="w-[300px] justify-between"
              role="combobox"
              aria-expanded={open}
            >
              {"Selecciona útiles"}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </FormControl>
        </PopoverTrigger>
        <AddSupplyPopover field={field} form={form} />
      </Popover>
      <SuppliesListForm field={field} form={form} />
      <FormMessage />
    </FormItem>
  );
};
