import NavBar from "@/components/ui/NavBar";
import PageRoute from "../PageRoute";
import BackButton from "../button/BackButton";
import PropTypes from "prop-types";
import users from "@/data-test/users.js"; // Asegúrate de importar los datos de usuarios

const ClassroomHeader = ({ classroom, options, activeTab, setActiveTab }) => {
    const page = [
        { name: "Salones", route: "/deliveries" },
        { name: classroom.name, route: `/${classroom.classroom_id}` }
    ];

    // Buscar el profesor en la lista de usuarios
    const teacher = users.find(user => user.id === classroom.teacher);
    const teacherName = teacher ? `${teacher.nombre} ${teacher.apellido}` : "No asignado";

    return (
        <div className="flex flex-col w-full h-full items-start justify-start gap-y-3">
            <PageRoute page1={page[0]} page2={page[1]} />

            <div className="pl-5 mt-2 mb-4">
                <BackButton />
            </div>

            <div className="pl-5 flex flex-col w-full h-full items-start justify-start gap-y-3">
                <h1 className="font-semibold text-xl">{classroom.name}</h1>
                <h2 className="text-routes mt-2">Docente: {teacherName}</h2>

                <NavBar options={options} active={activeTab} setActive={setActiveTab} />
            </div>
        </div>
    );
};

ClassroomHeader.propTypes = {
    classroom: PropTypes.object.isRequired,
    options: PropTypes.array.isRequired,
    activeTab: PropTypes.any.isRequired,
    setActiveTab: PropTypes.func.isRequired
};

export default ClassroomHeader;
