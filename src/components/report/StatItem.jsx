import PropTypes from "prop-types";

const StatItem = ({ description, value }) => {
    return (
        <div className="grid grid-cols-[6fr_1fr] w-full">
            <p className="flex justify-start">{description}</p>
            <p className="flex justify-center font-bold">{value}</p>
        </div>
    );
}

StatItem.propTypes = {
    description: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
}
 
export default StatItem;