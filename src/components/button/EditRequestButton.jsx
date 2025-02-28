import { useState } from "react";
import { EditButton } from "@/components/button";
import EditRequestDialog from "../request/EditRequestDialog";
import PropTypes from "prop-types";

const EditRequestButton = ({ solicitud, solicitudes, setSolicitudes }) => {
    const [open, setOpen] = useState(false);
    console.log(solicitudes, setSolicitudes)

    return (
        <div>
            <EditButton onClick={() => setOpen(true)}>Editar solicitud</EditButton>
            <EditRequestDialog 
                open={open} 
                setOpen={setOpen} 
                solicitud={solicitud} 
                setSolicitudes={setSolicitudes} 
                solicitudes={solicitudes} 
            />
        </div>
    );
};

EditRequestButton.propTypes = {
    solicitud: PropTypes.object.isRequired,
    solicitudes: PropTypes.array.isRequired,
    setSolicitudes: PropTypes.func.isRequired,
};

export default EditRequestButton;