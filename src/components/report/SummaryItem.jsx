import PropTypes from "prop-types";

const SummaryItem = ({ Icon, data, details }) => {
    return (
        <div className="flex flex-col items-center gap-y-2">
            <Icon size={35}/>
            <p className="font-bold">{data}</p>
            <p>{details}</p>
        </div>
    );
}

SummaryItem.propTypes = {
    Icon: PropTypes.element.isRequired,
    data: PropTypes.number.isRequired,
    details: PropTypes.string.isRequired
}
 
export default SummaryItem;