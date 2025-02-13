import { HiChevronLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
    const navigate = useNavigate()

    const goBackward = () => {
        navigate(-1)
    }
    return (
        <button className="flex text-routes_selected items-center" onClick={goBackward}>
            <HiChevronLeft />
            <p className="text-sm">Volver</p>
        </button>
    );
}
 
export default BackButton;