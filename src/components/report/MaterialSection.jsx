import { useEffect, useState } from "react";
import Dropdown from "@/components/ui/Dropdown"
import MaterialTable from "./MaterialTable";
import getMaterialsByTeacher from "@/hooks/getMaterialsByTeacher";
import getMaterials from "@/hooks/getMaterials";
import { getUsers } from "@/api";

const MaterialSection = () => {
    const [materialList, setMaterialList] = useState(getMaterials());
    const [selectedTeacher, setSelectedTeacher] = useState("default");
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    const fetchData = async () => {
        setLoading(true)
        try {
            const usersData = await getUsers();
            setUsers(usersData);
        } catch (err) {
            setError(err); 
            console.error("Error al obtener los salones:", err);
        } finally {
            setLoading(false); 
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    let profesores = users.filter(user => user.role === "profesor").map(profesor => ({
        id: profesor.id,
        nombre: `${profesor.name} ${profesor.last_name}`
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
