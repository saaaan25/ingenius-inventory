import { useParams } from "react-router-dom";
import { useState, useMemo } from "react";
import { classes } from "../data-test/class.js";
import { lista_detalles } from "../data-test/detalleLista.js";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card.jsx";
import suppliesList from "../data-test/supplies.js"; // Importa supplies
import NavBar from "@/components/ui/NavBar"; // Importa el NavBar

const Classroom = () => {
    const params = useParams();
    const classroom = classes.find((item) => item.id === Number(params.id));
    const supplies = lista_detalles.filter((item) => item.lista_utiles === classroom.id);

    // Opciones para el NavBar
    const options = useMemo(() => [
        {
            id: "Lista de útiles",
            component: (
                <div className="w-full mt-4">
                    <p className="flex self-start font-black mt-10 mb-4">
                        Lista de útiles
                    </p>
                    <ScrollArea className="h-150 w-full rounded-md">
                        <div className="flex flex-col gap-y-2">
                            {supplies.map((supply) => {
                                const util = suppliesList.find((item) => item.id === supply.util);
                                return (
                                    <Card key={supply.id} className="w-full flex justify-between items-center bg-button text-button py-4 px-6">
                                        <span className="font-normal text-base">{util?.nombre}</span> {/* Mostrar el nombre del útil */}
                                        <span className="text-sm text-routes">{supply.cantidad} {supply.cantidad === 1 ? "unidad" : "unidades"}</span>
                                    </Card>
                                );
                            })}
                        </div>
                    </ScrollArea>
                </div>
            ),
        },
        {
            id: "Alumnos",
            component: (
                <div className="w-full mt-4">
                    {}
                    <p className="flex self-start font-black mt-10 mb-4">
                        Sección en blanco
                    </p>
                </div>
            ),
        },
    ], [supplies]);

    // Estado para la pestaña activa
    const [activeTab, setActiveTab] = useState(options[0].id);

    return (
        <div className="flex flex-col w-full h-full items-start justify-start gap-y-3">
            <div className="flex items-center text-routes">
                <a className="font-light text-routes_selected text-sm" href="/deliveries">Salones</a>
                <HiChevronRight />
                <a className="font-light text-routes_selected text-sm" href={`/classrooms/${params.id}`}>
                    {classroom.nombre}
                </a>
            </div>
            <div className="pl-5 w-full flex flex-col items-start">
                <div className="mt-2 mb-4">
                    <button className="flex text-routes_selected items-center" onClick={() => window.history.back()}>
                        <HiChevronLeft />
                        <p className="text-sm">Volver</p>
                    </button> 
                </div>
                <h1 className="font-semibold text-xl">{classroom.nombre}</h1>
                <div className="mt-2 mb-4">
                    <h2 className="text-routes">Docente: {classroom.profesor}</h2>
                </div>

                {/* NavBar para cambiar entre secciones */}
                <NavBar options={options} active={activeTab} setActive={setActiveTab} />

                {/* Muestra la sección seleccionada */}
                <div className="w-full">
                    {options.find(option => option.id === activeTab)?.component}
                </div>
            </div>
        </div>
    );
};

export default Classroom;
