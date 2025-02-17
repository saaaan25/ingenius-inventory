import PropTypes from "prop-types";

const Container = ({ title, children }) => {
    return (
        <div className="bg-secondary border border-secondary_line rounded-lg flex flex-col items-start px-5 py-3 w-full h-[200px]">
            <p className="font-bold">
                {title}
            </p>
            <div>
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