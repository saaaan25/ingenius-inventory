import { useState } from 'react';
import { FaEdit } from 'react-icons/fa'; 
import initialSupplies from '../data-test/supplies.js';
import { AddButton } from './button/AddButton.jsx';
import { SearchSupplies } from './ui/SearchSupplies.jsx';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { InventoryForm } from "@/components/form/InventoryForm";

const InventoryTable = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [supplies, setSupplies] = useState(initialSupplies); // Cambiar supplies a estado
    const [open, setOpen] = useState(false);

    const filteredSupplies = supplies.filter(supply =>
        supply.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    function onSubmit(values) {
        const newSupply = {
            id: supplies.length, // Se genera un nuevo ID basado en el tamaño de la lista
            nombre: values.name,
            stock: values.quantity,
        };

        // Agregar el nuevo insumo a la lista de supplies
        setSupplies([...supplies, newSupply]);
        handleCloseDialog();
    }

    const handleCloseDialog = () => {
        setOpen(false);
    };

    return (
        <div style={{ padding: '20px', width: '100%', overflowX: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', alignItems: 'center', width: '100%' }}>
                <SearchSupplies searchTerm={searchTerm} setSearchTerm={setSearchTerm}>
                    Buscar Material
                </SearchSupplies>
                <AddButton onClick={() => setOpen(true)}>Agregar Material</AddButton>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd' }}>
                <thead>
                    <tr style={{ backgroundColor: '#f4f4f4' }}>
                        <th style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'left' }}>ID</th>
                        <th style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'left' }}>Nombre</th>
                        <th style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'left' }}>Stock</th>
                        <th style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'left' }}></th>
                    </tr>
                </thead>
                <tbody>
                    {filteredSupplies.map((supply, index) => (
                        <tr key={index}>
                            <td style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'left' }}>{supply.id}</td>
                            <td style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'left' }}>{supply.nombre}</td>
                            <td style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'left' }}>{supply.stock}</td>
                            <td style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'left' }}>
                                <button style={{
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontSize: '16px'
                                }}>
                                    <FaEdit color="black" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Dialog para agregar material */}
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="sm:max-w-[700px] px-10 py-8 flex flex-col gap-5 bg-secondary">
                    <DialogHeader>
                        <DialogTitle className="border-primary_line">Agregar Material</DialogTitle>
                    </DialogHeader>
                    <InventoryForm onSubmit={onSubmit} handleCloseDialog={handleCloseDialog} />
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default InventoryTable;
