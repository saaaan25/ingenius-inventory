import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import NavBar from "@/components/ui/NavBar";

const ClassroomHeader = ({ classroom, options, activeTab, setActiveTab }) => {
    return (
        <div className="flex flex-col w-full h-full items-start justify-start gap-y-3">
            {/* Navegación de rutas */}
            <div className="  flex items-center text-routes">
                <a className="font-light text-routes_selected text-sm" href="/deliveries">Salones</a>
                <HiChevronRight />
                <a className="font-light text-routes_selected text-sm" href={`/classrooms/${classroom.id}`}>
                    {classroom.nombre}
                </a>
            </div>

            {/* Botón de retroceso */}
            <div className="pl-5 mt-2 mb-4">
                <button className="flex text-routes_selected items-center" onClick={() => window.history.back()}>
                    <HiChevronLeft />
                    <p className="text-sm">Volver</p>
                </button> 
            </div>

            <div className="pl-5 flex flex-col w-full h-full items-start justify-start gap-y-3">
                <h1 className="font-semibold text-xl">{classroom.nombre}</h1>
                <h2 className="text-routes mt-2">Docente: {classroom.profesor}</h2>

                {/* NavBar dentro del header */}
                <NavBar options={options} active={activeTab} setActive={setActiveTab} />
            </div>

            {/* Título y docente */}
            
        </div>
    );
};

export default ClassroomHeader;
