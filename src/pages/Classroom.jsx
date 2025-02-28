import { useParams } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";
import { students } from "../data-test/students.js";
import ClassroomHeader from "../components/deliveries/ClassroomHeader";
import StudentList from "../components/deliveries/StudentList";
import SuppliesList from "../components/deliveries/SuppliesList";
import getSuppliesByClassroom from "@/hooks/getSuppliesByClassroom.js";
import { getClassroom } from "@/api/classroomApi";

const Classroom = () => {
    const params = useParams();
    const [classroom, setClassroom] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const classData = await getClassroom(params.id);
                setClassroom(classData);
            } catch (err) {
                setError(err); 
                console.error("Error al obtener los salones:", err);
            } finally {
                setLoading(false); 
            }
        };
        fetchData();
    }, [params.id]);

    console.log(classroom)

    const [suppliesClassroom, setSuppliesClassroom] = useState(
        getSuppliesByClassroom(classroom.utils_list)
    );

    const [studentsList, setStudentsList] = useState(
        students.filter(student => student.classroom_id === classroom.classroom_id)
    );

    const handleDeleteStudent = (studentId) => {
        setStudentsList(prevList => prevList.filter(student => student.student_id !== studentId));
    };

    const handleAddStudent = (newStudent) => {
        setStudentsList(prevList => [...prevList, { ...newStudent, classroom_id: classroom.classroom_id }]);
    };

    const options = useMemo(() => [
        { 
            id: "Lista de útiles", 
            component: <SuppliesList 
                supplies={suppliesClassroom} 
                setSupplies={setSuppliesClassroom} 
            /> 
        },
        { 
            id: "Alumnos", 
            component: <StudentList 
                studentsList={studentsList} 
                onDeleteStudent={handleDeleteStudent} 
                onAddStudent={handleAddStudent} 
                listId={classroom.utils_list}
            /> 
        }
    ], [suppliesClassroom, studentsList]);
    
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
