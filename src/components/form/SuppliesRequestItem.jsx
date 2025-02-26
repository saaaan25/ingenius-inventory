import { FormControl, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { SuppliesRequestList } from "./SuppliesRequestList";
import { AddSupplyToRequest } from "./AddSupplyToRequest";
import PropTypes from "prop-types";

const SuppliesRequestItem = ({ field, form }) => {
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
                    <AddSupplyToRequest field={field} form={form} />
                </Popover>
            </div>

            <SuppliesRequestList field={field} form={form} />
            <FormMessage />
        </FormItem>
    );
};

SuppliesRequestItem.propTypes = {
    field: PropTypes.any.isRequired,
    form: PropTypes.any.isRequired,
};

export default SuppliesRequestItem;
