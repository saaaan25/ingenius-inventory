import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import util_nuevo from "@/data-test/util_nuevo";
import PropTypes from "prop-types";
import { Plus, X } from "lucide-react";

const SuppliesList = ({ supplies, setSupplies }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedMaterial, setSelectedMaterial] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [open, setOpen] = useState(false);

    const filteredMaterials = searchTerm
        ? util_nuevo.filter((material) =>
            material.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : [];

    const handleAddMaterial = () => {
        if (!setSupplies) return;

        if (selectedMaterial && quantity > 0) {
            setSupplies((prevSupplies) => {
                const existingIndex = prevSupplies.findIndex(item => item.util_id === selectedMaterial.util_id);
                let updatedSupplies;

                if (existingIndex !== -1) {
                    updatedSupplies = [...prevSupplies];
                    updatedSupplies[existingIndex] = {
                        ...updatedSupplies[existingIndex],
                        quantity: updatedSupplies[existingIndex].quantity + quantity
                    };
                } else {
                    updatedSupplies = [...prevSupplies, { ...selectedMaterial, quantity }];
                }

                return updatedSupplies;
            });

            setSelectedMaterial(null);
            setSearchTerm("");
            setQuantity(1);
            setTimeout(() => setOpen(false), 100);
        }
    };

    const handleDeleteMaterial = (util_id) => {
        console.log("Intentando eliminar material con ID:", util_id);

        if (!util_id) {
            console.warn("ID inválido:", util_id);
            return;
        }

        setSupplies((prevSupplies) => {
            const updatedSupplies = prevSupplies.filter(item => item.util_id !== util_id);
            console.log("Lista después de eliminar:", updatedSupplies);
            return updatedSupplies;
        });
    };

    return (
        <div className="w-full">
            <div className="flex items-center justify-between mb-2">
                <p className="font-black">Lista de útiles</p>
                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                        <Button className="ml-auto bg-primary rounded hover:cursor-pointer hover:bg-primary/90 flex items-center gap-2">
                            <Plus size={18} />
                            Agregar Material
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="p-6 w-[600px] rounded-xl shadow-lg bg-white">
                        <DialogTitle className="text-lg font-semibold text-gray-900">Seleccionar Material</DialogTitle>
                        <DialogDescription className="text-sm text-gray-600">Elige un material y define la cantidad.</DialogDescription>

                        <input
                            type="text"
                            placeholder="Buscar material..."
                            className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-300 mt-2"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />

                        <div className="h-40 overflow-y-auto rounded-lg p-2 mt-2 bg-gray-50">
                            {filteredMaterials.length > 0 ? (
                                filteredMaterials.map((material) => (
                                    <div
                                        key={material.util_id || material.name} // Asegurar clave única
                                        className={`p-3 cursor-pointer rounded-lg transition ${selectedMaterial?.util_id === material.util_id ? "bg-blue-100" : "hover:bg-gray-100"}`}
                                        onClick={() => setSelectedMaterial(material)}
                                    >
                                        {material.name}
                                    </div>
                                ))
                            ) : (
                                <p className="text-sm text-gray-500 text-center">Escribe para buscar materiales...</p>
                            )}
                        </div>

                        {selectedMaterial && (
                            <div className="mt-4 flex items-center justify-between bg-gray-100 p-3 rounded-lg shadow">
                                <span className="text-base font-medium">{selectedMaterial.name}</span>
                                <div className="flex items-center gap-2">
                                    <Button size="sm" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</Button>
                                    <span className="text-lg font-semibold">{quantity}</span>
                                    <Button size="sm" onClick={() => setQuantity(quantity + 1)}>+</Button>
                                </div>
                            </div>
                        )}

                        <Button 
                            className="mt-4 w-full bg-black hover:bg-gray-900 text-white font-semibold" 
                            onClick={handleAddMaterial} 
                            disabled={!selectedMaterial}
                        >
                            Agregar a la lista
                        </Button>
                    </DialogContent>
                </Dialog>
            </div>

            <ScrollArea className="h-150 w-full rounded-md">
                <div className="flex flex-col gap-y-2">
                    {supplies.map((supply, index) => (
                        <Card 
                            key={supply.util_id || `${supply.name}-${index}`} // Clave única con fallback
                            className="w-full flex justify-between items-center bg-button text-button py-4 px-6"
                        >
                            <span className="font-normal text-base flex-1 text-start">{supply.name}</span>
                            <span className="text-sm text-routes flex-1 text-center">{supply.quantity} unidades</span>
                            <Button size="icon" variant="ghost" onClick={() => handleDeleteMaterial(supply.util_id)}>
                                <X size={18} className="text-red-500 w-auto h-auto" />
                            </Button>
                        </Card>
                    ))}
                </div>
            </ScrollArea>
        </div>
    );
};

SuppliesList.propTypes = {
    supplies: PropTypes.array.isRequired,
    setSupplies: PropTypes.func.isRequired,
};

export default SuppliesList;