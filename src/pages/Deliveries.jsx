import { classes } from '../data-test/class.js';
import ClassRoom from '../components/ClassRoom';
import { FaPlus } from 'react-icons/fa';
import { AddButton } from '@/components/button/AddButton.jsx';

const Deliveries = () => {
    return (
        <div className="flex flex-col w-full h-full items-start justify-start gap-y-3">
            <a className="font-light text-routes text-sm" href="/inventory">Salones</a>
            <div className="pl-5">
                <h1 className="font-semibold text-xl">Salones</h1>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', alignItems: 'center', width: '100%' }}>
                        <div></div>
                        <AddButton>Agregar Salon</AddButton> 
                        </div>
            <div className="flex flex-col w-full h-full p-6">
            <div className="grid grid-cols-3 gap-6">
                {classes.map((classRoom, index) => (
                    <ClassRoom key={index} nombre={classRoom.nombre} profesor={classRoom.profesor} />
                ))}
            </div>
        </div>
        </div> 
        
    );
};

export default Deliveries;
