import { useState } from 'react';
import { FaSearch, FaPlus, FaEdit } from 'react-icons/fa'; 
import supplies from '../data-test/supplies.js';

const InventoryTable = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredSupplies = supplies.filter(supply =>
        supply.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style={{ padding: '20px', width: '100%', overflowX: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', alignItems: 'center', width: '100%' }}>
                <div style={{ position: 'relative', width: '40%' }}>
                    <input
                        type="text"
                        placeholder="Buscar material"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{
                            padding: '10px 40px 10px 10px',
                            borderRadius: '5px',
                            border: '1px solid #ddd',
                            width: '100%',
                            boxSizing: 'border-box'
                        }}
                    />
                    <span style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}>
                        <FaSearch color="#272F36" /> {/* Ícono de lupa */}
                    </span>
                </div>
                <button style={{
                    padding: '10px 20px',
                    backgroundColor: '#000',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    width: '200px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <FaPlus color="white" style={{ marginRight: '8px' }} /> {/* Ícono de agregar */}
                    Agregar material
                </button>
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