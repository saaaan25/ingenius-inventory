import { Card } from "@/components/ui/card.jsx";
import { HiX } from "react-icons/hi"; // Icono de eliminación
import PropTypes from "prop-types";

const StudentCard = ({ student, index, onDelete }) => {
    return (
        <Card className="w-full flex justify-between items-center bg-button text-button py-4 px-6">
            <span className="ml-5 font-bold text-base">{index}</span>
            <div className="flex-1 ml-70 text-left">
                <span className="font-normal text-base">
                    {student.name} {student.last_name}
                </span>
            </div>

            <button onClick={() => onDelete(student.student_id)} className="text-black hover:text-red-700">
                <HiX />
            </button>
        </Card>


    );
};

StudentCard.propTypes = {
    student: PropTypes.shape({
        student_id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        last_name: PropTypes.string.isRequired,
    }).isRequired,
    index: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default StudentCard;
