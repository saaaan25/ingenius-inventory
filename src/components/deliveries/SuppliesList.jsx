import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card.jsx";
import PropTypes from "prop-types";

const SuppliesList = ({ supplies }) => {
    return (
        <div className="w-full">
            <p className="flex self-start font-black mb-4">Lista de útiles</p>
            <ScrollArea className="h-150 w-full rounded-md">
                <div className="flex flex-col gap-y-2">
                    {supplies.map((supply, index) => {
                        return (
                            <Card key={index} className="w-full flex justify-between items-center bg-button text-button py-4 px-6">
                                <span className="font-normal text-base">{supply?.name}</span>
                                <span className="text-sm text-routes">{supply.quantity} {supply.quantity === 1 ? "unidad" : "unidades"}</span>
                            </Card>
                        );
                    })}
                </div>
            </ScrollArea>
        </div>
    );
};

SuppliesList.propTypes = {
    supplies: PropTypes.array.isRequired
}

export default SuppliesList;
