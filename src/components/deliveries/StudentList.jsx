import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import StudentCard from "@/components/ui/studentCard.jsx";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { AddButton } from "@/components/button/AddButton.jsx";
import StudentForm from "@/components/form/StudentForm";

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
                            key={student.id} 
                            student={student} 
                            index={index + 1}
                            onDelete={() => onDeleteStudent(student.id)} 
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

export default StudentList;