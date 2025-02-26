// Classroom.jsx
import { useParams } from "react-router-dom";
import { useState, useMemo } from "react";
import { classes } from "../data-test/class.js";
import { lista_detalles } from "../data-test/detalleLista.js";
import { students } from "../data-test/students.js";
import ClassroomHeader from "../components/deliveries/ClassroomHeader";
import StudentList from "../components/deliveries/StudentList";
import SuppliesList from "../components/deliveries/SuppliesList";

const Classroom = () => {
    const params = useParams();
    const classroom = classes.find((item) => item.id === Number(params.id));
    const supplies = lista_detalles.filter((item) => item.lista_utiles === classroom.id);
    const [studentsList, setStudentsList] = useState(students.filter(student => student.aula_id === classroom.id));

    const handleDeleteStudent = (studentId) => {
        setStudentsList(prevList => prevList.filter(student => student.id !== studentId));
    };

    const handleAddStudent = (newStudent) => {
        setStudentsList(prevList => [...prevList, { ...newStudent, aula_id: classroom.id }]);
    };

    const options = useMemo(() => [
        { id: "Lista de útiles", component: <SuppliesList supplies={supplies} /> },
        { id: "Alumnos", component: <StudentList studentsList={studentsList} onDeleteStudent={handleDeleteStudent} onAddStudent={handleAddStudent} /> }
    ], [supplies, studentsList]);

    const [activeTab, setActiveTab] = useState(options[0].id);

    return (
        <div className="flex flex-col w-full h-full items-start justify-start gap-y-3">
            <ClassroomHeader 
                classroom={classroom} 
                options={options} 
                activeTab={activeTab} 
                setActiveTab={setActiveTab} 
            />
            <div className="pl-5 w-full">{options.find(option => option.id === activeTab)?.component}</div>
        </div>
    );
};

export default Classroom;