import { useEffect, useState } from 'react';
import { FaEdit } from 'react-icons/fa'; 
import { AddButton } from './button/AddButton.jsx';
import { SearchSupplies } from './ui/SearchSupplies.jsx';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import { createUtil, getUtils, updateUtil } from '@/api/utilApi.js';
import InventoryForm from './form/InventoryForm.jsx';

const InventoryTable = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [supplies, setSupplies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchUtils = async () => {
            setLoading(true)
          try {
            const data = await getUtils();
            setSupplies(data);
          } catch (err) {
            setError(err);
          } finally {
            setLoading(false);
          }
        };
    
        fetchUtils();
      }, []);

    const [open, setOpen] = useState(false);
    const [editingSupply, setEditingSupply] = useState(null);
    const [type, setType] = useState("agregar")

    const filteredSupplies = supplies.filter(supply =>
        supply.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    async function onSubmit(values) {
        try {
          if (editingSupply) {
            setType("editar");
            const updatedUtil = {
              util_id: editingSupply.id, 
              name: values.name,
              stock: values.quantity,
            };
            console.log(updatedUtil)
      
            await updateUtil(updatedUtil);
            const data = await getUtils();
            setSupplies(data);
          } else {
            setType("agregar");
            const newUtil = {
              name: values.name,
              stock: values.quantity,
            };
      
            const createdUtil = await createUtil(newUtil);
            setSupplies((prevSupplies) => [...prevSupplies, createdUtil]);
          }
          handleCloseDialog();
        } catch (err) {
          console.error("Error al procesar la utilidad:", err);
          alert("Ocurrió un error al procesar la utilidad. Por favor, inténtalo de nuevo.");
        }
    }    

    const handleCloseDialog = () => {
        setOpen(false);
        setEditingSupply(null);
    };

    const handleEdit = async(supply) => {
        setOpen(true);
        setEditingSupply(supply);
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
                    {filteredSupplies.map((supply, index) => (
                        <tr key={supply.util_id} style={{ borderBottom: '1px solid #ddd' }}>
                            <td style={{ padding: '10px', textAlign: 'left' }}>{index + 1}</td>
                            <td style={{ padding: '10px', textAlign: 'left' }}>{supply.name}</td>
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
                        type={type}
                    />
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default InventoryTable;
