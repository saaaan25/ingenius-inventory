import { useState } from 'react';
import { AddButton } from '@/components/button';
import RegisterRequestDialog from '../request/RegisterRequestDialog';
import PropTypes from 'prop-types';

const AddRequestButton = ({ setSolicitudes, solicitudes }) => {
    const [open, setOpen] = useState(false);
    console.log(solicitudes, setSolicitudes)
    return (
        <div>
            <AddButton onClick={()=>setOpen(true)}>Solicitar material</AddButton>
            <RegisterRequestDialog 
                open={open} 
                setOpen={setOpen} 
                setSolicitudes={setSolicitudes} 
                solicitudes={solicitudes} 
            />
        </div>
    );
};

AddRequestButton.propTypes = {
    setSolicitudes: PropTypes.func.isRequired,
    solicitudes: PropTypes.array.isRequired
};

export default AddRequestButton;
