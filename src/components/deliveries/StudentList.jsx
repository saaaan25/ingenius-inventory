import { ScrollArea } from "@/components/ui/scroll-area";
import StudentCard from "@/components/ui/studentCard.jsx";

const StudentList = ({ studentsList, onDeleteStudent }) => {
    return (
        <div className="w-full">
            <p className="flex self-start font-black mb-4">Lista de alumnos</p>
            <ScrollArea className="h-150 w-full rounded-md">
                <div className="flex flex-col gap-y-2">
                    {studentsList.map((student, index) => (
                        <StudentCard 
                            key={student.id} 
                            student={student} 
                            index={index + 1}
                            onDelete={() => onDeleteStudent(student.id)} 
                        />
                    ))}
                </div>
            </ScrollArea>
        </div>
    );
};

export default StudentList;
