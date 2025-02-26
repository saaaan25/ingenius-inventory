import { useState } from "react";
import Dropdown from "@/components/ui/Dropdown"
import MaterialTable from "./MaterialTable";
import getMaterialsByTeacher from "@/hooks/getMaterialsByTeacher";
import users from "@/data-test/users";
import getMaterials from "@/hooks/getMaterials";

const MaterialSection = () => {
    const [materialList, setMaterialList] = useState(getMaterials());
    const [selectedTeacher, setSelectedTeacher] = useState("default");

    let profesores = users.filter(user => user.rol === "profesor").map(profesor => ({
        id: profesor.id,
        nombre: `${profesor.nombre} ${profesor.apellido}`
    }))

    const handleSelectChange = (event) => {
        const teacher = event.target.value;

        if (teacher === "default") {
            const materiales = getMaterials()
            setMaterialList(materiales);
        } else {
            const materials = getMaterialsByTeacher(Number(teacher));
            setMaterialList(materials);
        }

        setSelectedTeacher(teacher);
    };

    return (
        <div className="w-full p-4 flex flex-col">
            <div className="w-full flex justify-between">
                <h2 className="font-bold mb-4 flex justify-start w-full">Materiales por profesor</h2>
                <Dropdown options={profesores} onChange={handleSelectChange} selectedValue={selectedTeacher}/>
            </div>
            <div className="mt-4 w-full flex justify-center">
                <MaterialTable materials={materialList} />
            </div>
        </div>
    );
};

export default MaterialSection;
