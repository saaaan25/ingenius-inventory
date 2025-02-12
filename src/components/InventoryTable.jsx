import { useState } from 'react';
import { FaSearch, FaPlus, FaEdit } from 'react-icons/fa'; 
import supplies from '../data-test/supplies.js';
import { AddButton } from './button/AddButton.jsx';
import { SearchSupplies } from './ui/SearchSupplies.jsx';

const InventoryTable = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredSupplies = supplies.filter(supply =>
        supply.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style={{ padding: '20px', width: '100%', overflowX: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', alignItems: 'center', width: '100%' }}>
            <SearchSupplies searchTerm={searchTerm} setSearchTerm={setSearchTerm}>
                Buscar Material
            </SearchSupplies>
                <AddButton>Agregar Material</AddButton> 
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd' }}>
                <thead>
                    <tr style={{ backgroundColor: '#f4f4f4' }}>
                        <th style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'left' }}>Código</th>
                        <th style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'left' }}>Nombre</th>
                        <th style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'left' }}>Cantidad</th>
                        <th style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'left' }}></th>
                    </tr>
                </thead>
                <tbody>
                    {filteredSupplies.map((supply, index) => (
                        <tr key={index}>
                            <td style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'left' }}>{supply.code}</td>
                            <td style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'left' }}>{supply.name}</td>
                            <td style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'left' }}>{supply.quantity}</td>
                            <td style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'left' }}>
                                <button style={{
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontSize: '16px'
                                }}>
                                    <FaEdit color="black" /> {/* Ícono de editar */}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default InventoryTable;