import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const SidebarItem = ({ title, route, Icon }) => {
    const navigate = useNavigate();
    const goToPage = () => {
        navigate(route)
    }
    return (
        <button onClick={goToPage} className="bg-selected text-white py-4 pl-10 w-full flex items-center gap-x-3">
            <Icon size={25}/>
            <p className="text-lg">{title}</p>
        </button>
    );
}

SidebarItem.propTypes = {
    title: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired,
    Icon: PropTypes.element.isRequired
}
 
export default SidebarItem;