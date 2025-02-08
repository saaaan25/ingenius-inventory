import { useNavigate } from "react-router-dom";

const SidebarItem = ({ title, route, Icon }) => {
    const navigate = useNavigate();
    const goToPage = () => {
        navigate(route)
    }
    return (
        <button onClick={goToPage} className="bg-selected text-white py-4 pl-10 w-full flex items-center gap-x-3">
            <Icon size={25}/>
            <p className="text-xl font-medium">{title}</p>
        </button>
    );
}
 
export default SidebarItem;