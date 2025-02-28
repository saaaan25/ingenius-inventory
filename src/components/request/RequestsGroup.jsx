import PropTypes from "prop-types";
import RequestItem from "./RequestItem";
import getSpecificDate from "@/hooks/getSpecificDate";

const RequestsGroup = ({ requests }) => {
    const requestDate = getSpecificDate(requests[0].date)
    
    return (
        <div className="flex flex-col w-full mt-2 gap-y-2">
            <div className="flex items-start font-bold">
                {requestDate.shortDate}
            </div>
            {requests.map((request) => (
                <RequestItem key={request.request_id} request={request} />
            ))}
        </div>
    );
}

RequestsGroup.propTypes = {
    requests: PropTypes.array.isRequired
}
 
export default RequestsGroup;