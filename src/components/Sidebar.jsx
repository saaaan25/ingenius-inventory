import { Outlet } from 'react-router-dom';
import SidebarItem from './SidebarItem';
import { FaBoxOpen } from "react-icons/fa";
import { RiFileTransferLine } from "react-icons/ri";
import { BiLineChart, BiUser } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineCheckBox, MdOutlineNotifications } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { LogOut } from 'lucide-react';
import { useAuth } from '@/hooks';
import { useNavigate } from 'react-router-dom';

const pages = [
    {
        title: "Inventario",
        route: "/inventory",
        icon: FaBoxOpen
    },
    {
        title: "Solicitudes",
        route: "/requests",
        icon: RiFileTransferLine
    },
    {
        title: "Reportes",
        route: "/reports",
        icon: BiLineChart
    },
    {
        title: "Compras",
        route: "/purchases",
        icon: AiOutlineShoppingCart
    },
    {
        title: "Entregas",
        route: "/deliveries",
        icon: MdOutlineCheckBox
    },
    {
        title: "Usuarios",
        route: "/users",
        icon: FaUsers
    }
]

const SideBar = () => {
    const { logout } = useAuth();
    const navigate=useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/login');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='flex min-w-screen min-h-screen'>
            <aside className='fixed w-[250px] min-h-screen bg-primary flex flex-col items-start justify-start pt-20 h-full'>
                {pages.map((page, index) => (
                    <SidebarItem key={index} title={page.title} route={page.route} Icon={page.icon} />
                ))}
                <div className='w-full h-full p-6 flex items-end justify-end gap-x-3 text-white'>
                    <BiUser size={25}/>
                    <MdOutlineNotifications size={25}/> 
                    <LogOut size={25} className='cursor-pointer' onClick={()=>handleLogout()}/>
                </div>
            </aside>
            <main className='flex-1 px-10 py-3 overflow-auto ml-60 mr-4'>
                <Outlet />
            </main>
        </div>
    );
}
 
export default SideBar;