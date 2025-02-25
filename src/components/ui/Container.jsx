import PropTypes from "prop-types";

const Container = ({ children }) => {
    return (
        <div className="bg-secondary border border-secondary_line rounded-lg flex flex-col items-start px-5 py-5 w-full h-auto gap-y-5"> 
            {children}
        </div>
    );
}

Container.propTypes = {
    children: PropTypes.node.isRequired
}
 
export default Container;