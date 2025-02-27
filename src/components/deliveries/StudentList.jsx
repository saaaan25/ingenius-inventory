import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import StudentCard from "@/components/deliveries/StudentCard.jsx";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { AddButton } from "@/components/button/AddButton.jsx";
import StudentForm from "@/components/form/StudentForm";
import PropTypes from "prop-types";

const StudentList = ({ studentsList, onDeleteStudent, onAddStudent }) => {
    const [open, setOpen] = useState(false);
    
    const handleAddStudent = (values) => {
        onAddStudent(values);
        setOpen(false);
    };

    return (
        <div className="w-full">
            <div className="flex justify-between items-center mb-4">
                <p className="font-black">Lista de alumnos</p>
                <AddButton onClick={() => setOpen(true)}>Agregar Alumno</AddButton>
            </div>
            <ScrollArea className="h-150 w-full rounded-md">
                <div className="flex flex-col gap-y-2">
                    {studentsList.map((student, index) => (
                        <StudentCard 
                            key={student.student_id} 
                            student={student} 
                            index={index + 1}
                            onDelete={() => onDeleteStudent(student.student_id)} 
                        />
                    ))}
                </div>
            </ScrollArea>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="sm:max-w-[600px] px-10 py-8 flex flex-col gap-5 bg-secondary">
                    <DialogHeader>
                        <DialogTitle>Agregar Alumno</DialogTitle>
                    </DialogHeader>
                    <StudentForm onSubmit={handleAddStudent} handleCloseDialog={() => setOpen(false)} />
                </DialogContent>
            </Dialog>
        </div>
    );
};

StudentList.propTypes = {
    studentsList: PropTypes.array.isRequired,
    onDeleteStudent: PropTypes.func.isRequired,
    onAddStudent: PropTypes.func.isRequired
};

export default StudentList;