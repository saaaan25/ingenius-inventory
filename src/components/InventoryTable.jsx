import { useState } from 'react';
import { FaEdit } from 'react-icons/fa'; 
import initialSupplies from '../data-test/supplies.js';
import { AddButton } from './button/AddButton.jsx';
import { SearchSupplies } from './ui/SearchSupplies.jsx';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { InventoryForm } from "@/components/form/InventoryForm";

const InventoryTable = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [supplies, setSupplies] = useState(initialSupplies);
    const [open, setOpen] = useState(false);
    const [editingSupply, setEditingSupply] = useState(null);

    const filteredSupplies = supplies.filter(supply =>
        supply.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    function onSubmit(values) {
        if (editingSupply) {
            setSupplies(supplies.map(supply => 
                supply.id === editingSupply.id ? { ...supply, nombre: values.name, stock: values.quantity } : supply
            ));
        } else {
            const newSupply = {
                id: supplies.length,
                nombre: values.name,
                stock: values.quantity,
            };
            setSupplies([...supplies, newSupply]);
        }
        handleCloseDialog();
    }

    const handleCloseDialog = () => {
        setOpen(false);
        setEditingSupply(null);
    };

    const handleEdit = (supply) => {
        setEditingSupply(supply);
        setOpen(true);
    };

    return (
        <div style={{ padding: '20px', width: '100%', overflowX: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', alignItems: 'center', width: '100%' }}>
                <SearchSupplies searchTerm={searchTerm} setSearchTerm={setSearchTerm}>
                    Buscar Material
                </SearchSupplies>
                <AddButton onClick={() => setOpen(true)}>Agregar Material</AddButton>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', borderBottom: '1px solid #ddd' }}>
                <thead>
                    <tr style={{ backgroundColor: '#f4f4f4', borderBottom: '1px solid #ddd' }}>
                        <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>ID</th>
                        <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Nombre</th>
                        <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Stock</th>
                        <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}></th>
                    </tr>
                </thead>
                <tbody>
                    {filteredSupplies.map((supply) => (
                        <tr key={supply.id} style={{ borderBottom: '1px solid #ddd' }}>
                            <td style={{ padding: '10px', textAlign: 'left' }}>{supply.id}</td>
                            <td style={{ padding: '10px', textAlign: 'left' }}>{supply.nombre}</td>
                            <td style={{ padding: '10px', textAlign: 'left' }}>{supply.stock}</td>
                            <td style={{ padding: '10px', textAlign: 'left' }}>
                                <button 
                                    onClick={() => handleEdit(supply)}
                                    style={{
                                        backgroundColor: 'transparent',
                                        border: 'none',
                                        cursor: 'pointer',
                                        fontSize: '16px'
                                    }}
                                >
                                    <FaEdit color="black" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="sm:max-w-[700px] px-10 py-8 flex flex-col gap-5 bg-secondary">
                    <DialogHeader>
                        <DialogTitle className="border-primary_line">{editingSupply ? "Editar Material" : "Agregar Material"}</DialogTitle>
                    </DialogHeader>
                    <InventoryForm 
                        onSubmit={onSubmit} 
                        handleCloseDialog={handleCloseDialog} 
                        initialData={editingSupply}
                    />
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default InventoryTable;
