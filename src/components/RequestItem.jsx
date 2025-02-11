import PropTypes from "prop-types";
import { RiFileTransferLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import users from "../data-test/users";

const RequestItem = ({ request }) => {
    const navigate = useNavigate()
    const author = users.find((user) => user.id === Number(request.idProfesor))
    const goToRequest = () => {
        navigate(`${request.id}`)
    }

    return (
        <button className="border border-primary_line w-full rounded-md flex text-primary px-4 py-2 
                            gap-x-4 items-center bg-button text-button mt-2 mb-2"
                onClick={goToRequest}>
            <div>
                <RiFileTransferLine size={30} color="text-primary"/>
            </div>
            <div className="flex flex-col items-start">
                <p>
                    Solicitud {request.id}
                </p>
                <p className="text-sm text-routes">
                    {author.nombreCompleto}
                </p>
            </div>
        </button>
    );
}

RequestItem.propTypes = {
    request: PropTypes.object.isRequired
}
 
export default RequestItem;