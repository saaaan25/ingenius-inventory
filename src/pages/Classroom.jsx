import { useParams } from "react-router-dom";
import { classes } from "../data-test/class.js";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const Classroom = () => {
    const params = useParams();
    const classroom = classes.find((item) => item.id === Number(params.id));

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
                <div>
                    <h2 className="text-routes">Docente: {classroom.profesor}</h2>
                </div>
                <div className="w-full mt-4">
                </div>
            </div>
        </div>
    );
};

export default Classroom;
