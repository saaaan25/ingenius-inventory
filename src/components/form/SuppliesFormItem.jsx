import React from "react";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { SuppliesFormList } from "@/components/form";
import { AddSupplyPopover } from "@/components/form";

export const SuppliesFormItem = ({ field, form }) => {
  return (
    <FormItem className="flex flex-col">
      <div className="flex justify-between">
        <FormLabel>Útiles</FormLabel>
        <Popover modal>
          <PopoverTrigger asChild>
            <FormControl>
              <Button
                variant="ghost"
                className="h-auto p-0 hover:bg-white hover:cursor-pointer "
                role="combobox"
                aria-expanded={open}
              >
                <div className="flex flex-end">
                  <Plus />
                </div>
              </Button>
            </FormControl>
          </PopoverTrigger>
          <AddSupplyPopover field={field} form={form} />
        </Popover>
      </div>

      <SuppliesFormList field={field} form={form} />
      <FormMessage />
    </FormItem>
  );
};
