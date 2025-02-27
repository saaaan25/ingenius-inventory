import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card.jsx";
import suppliesList from "../../data-test/supplies.js";

const SuppliesList = ({ supplies }) => {
    return (
        <div className="w-full">
            <p className="flex self-start font-black mb-4">Lista de útiles</p>
            <ScrollArea className="h-150 w-full rounded-md">
                <div className="flex flex-col gap-y-2">
                    {supplies.map((supply) => {
                        const util = suppliesList.find((item) => item.id === supply.util);
                        return (
                            <Card key={supply.id} className="w-full flex justify-between items-center bg-button text-button py-4 px-6">
                                <span className="font-normal text-base">{util?.nombre}</span>
                                <span className="text-sm text-routes">{supply.cantidad} {supply.cantidad === 1 ? "unidad" : "unidades"}</span>
                            </Card>
                        );
                    })}
                </div>
            </ScrollArea>
        </div>
    );
};

export default SuppliesList;
