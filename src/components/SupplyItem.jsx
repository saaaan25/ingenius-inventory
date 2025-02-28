import PropTypes from "prop-types";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { RiFileTransferLine } from "react-icons/ri";

const SupplyItem = ({ supply }) => {
    return (
        <Card className="w-full flex hover:cursor-pointer hover:bg-gray-50">
            <div className="flex items-center px-5">
                <RiFileTransferLine size={35} color="text-primary"/>
            </div>
            <CardHeader className="flex text-start pl-0">
                <CardTitle>{supply.name}</CardTitle>
                <CardDescription>{supply.cantidad} unidades</CardDescription>
            </CardHeader>
        </Card>
    );
}

SupplyItem.propTypes = {
    supply: PropTypes.object.isRequired
}
 
export default SupplyItem;