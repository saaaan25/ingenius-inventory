import { classes } from '../data-test/class.js';
import ClassRoom from '../components/deliveries/ClassRoom.jsx';
import { AddButton } from '@/components/button/AddButton.jsx';
import { useState } from 'react';
import PageRoute from '@/components/PageRoute.jsx';

const Deliveries = () => {
    const page = {
        name: "Salones",
        route: "/deliveries"
    }
    const [classrooms, setClassrooms] = useState(classes);
    return (
        <div className="flex flex-col w-full h-full items-start justify-start gap-y-3">
            <PageRoute page1={page} />
            <div className="pl-5">
                <h1 className="font-semibold text-xl">Salones</h1>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', alignItems: 'center', width: '100%' }}>
                <div></div>
                <AddButton>Agregar Salon</AddButton> 
            </div>
            <div className="flex flex-col w-full h-full p-6">
                <div className="grid grid-cols-3 gap-6">
                    {classrooms.map((classRoom) => (
                        <ClassRoom 
                            key={classRoom.classroom_id} 
                            id={classRoom.classroom_id} 
                            nombre={classRoom.name} 
                        />
                    ))}
                </div>
            </div>
        </div> 
    );
};

export default Deliveries;
