import PropTypes from "prop-types";
import { RiFileTransferLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

const RequestItem = ({ request }) => {
    const navigate = useNavigate()
    console.log(request)
    console.log(request.user.id)
    
    const estado_solicitud = request.status.charAt(0).toUpperCase() + request.status.slice(1).toLowerCase();

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
                <CardDescription>{ request.status != "pendiente" ? estado_solicitud : request.user?.name + " " + request.user?.last_name }</CardDescription>
            </CardHeader>
        </Card>
    );
}

RequestItem.propTypes = {
    request: PropTypes.object.isRequired
}
 
export default RequestItem;