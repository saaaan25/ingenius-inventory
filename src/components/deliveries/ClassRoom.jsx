import PropTypes from 'prop-types';
import { FaEllipsisV } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ClassRoom = ({ id, nombre }) => {
    const navigate = useNavigate();

    const goToClassroom = () => {
        navigate(`/classrooms/${id}`);
    };

    return (
        <div 
            className="relative bg-white rounded-lg shadow-md p-4 flex flex-col justify-between cursor-pointer"
            style={{ height: '200px', width: '90%' }}
            onClick={goToClassroom}  
        >
            <div>
                <h2 className="text-lg font-semibold">{nombre}</h2>
                <p className="text-sm text-gray-600">ola</p>
            </div>
            <div className="absolute top-4 right-4 cursor-pointer">
                <FaEllipsisV />
            </div>
        </div>
    );
};

ClassRoom.propTypes = {
    id: PropTypes.any.isRequired,
    nombre: PropTypes.string.isRequired,
};

export default ClassRoom;
