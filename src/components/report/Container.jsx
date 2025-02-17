import PropTypes from "prop-types";

const Container = ({ title, children }) => {
    return (
        <div className="bg-secondary border border-secondary_line rounded-lg flex flex-col items-start px-5 py-3 w-full h-auto gap-y-5">
            <p className="font-bold">
                {title}
            </p>
            <div className="w-full">
                {children}
            </div>
        </div>
    );
}

Container.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}
 
export default Container;