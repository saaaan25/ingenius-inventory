import PropTypes from "prop-types";
import groupRequestsByDate from "@/hooks/groupRequestByDate";
import RequestsGroup from "./RequestsGroup";

const RequestsSection = ({ requests }) => {
    const groupedRequests = groupRequestsByDate(requests).reverse()

    return (
        <div className="flex flex-col w-full mt-4 gap-y-2">
            {groupedRequests.map((requests, index) => (
                <RequestsGroup key={index} requests={requests} />
            ))}
        </div>
    );
}

RequestsSection.propTypes = {
    requests: PropTypes.array.isRequired
}
 
export default RequestsSection;