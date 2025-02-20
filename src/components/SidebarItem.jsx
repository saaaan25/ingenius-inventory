import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";

const SidebarItem = ({ title, route, Icon }) => {
    const navigate = useNavigate();
    const location = useLocation(); 
    const isActive = location.pathname === route;
    const goToPage = () => {
        navigate(route)
    }

    return (
        <button onClick={goToPage} className={`text-white py-4 pl-10 w-full flex items-center gap-x-3
                                                ${isActive ? "bg-tertiary" : "bg-selected"}`}>
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