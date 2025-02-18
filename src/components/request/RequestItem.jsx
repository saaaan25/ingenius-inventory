import PropTypes from "prop-types";
import { RiFileTransferLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import users from "../../data-test/users";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

const RequestItem = ({ request }) => {
    const navigate = useNavigate()
    const author = users.find((user) => user.id === Number(request.usuario))
    const estado_solicitud = request.estado.charAt(0).toUpperCase() + request.estado.slice(1).toLowerCase();

    const goToRequest = () => {
        navigate(`${request.id}`)
    }

    return (
        <Card className="w-full flex hover:cursor-pointer hover:bg-gray-50" onClick={goToRequest}>
            <div className="flex items-center px-6">
                <RiFileTransferLine size={35} color="text-primary"/>
            </div>
            <CardHeader className="flex text-start pl-0">
                <CardTitle>Solicitud N°{request.id}</CardTitle>
                <CardDescription>{ request.estado != "pendiente" ? estado_solicitud : author.nombreCompleto }</CardDescription>
            </CardHeader>
        </Card>
    );
}

RequestItem.propTypes = {
    request: PropTypes.object.isRequired
}
 
export default RequestItem;