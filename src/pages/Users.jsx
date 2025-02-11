import { AddButton,AcceptButton,CancelButton,EditButton } from "@/components/button";

const Users = () => {
    return (
        <div className="flex flex-col w-full h-full items-start justify-start gap-y-3">
            <a className="font-light text-routes text-sm" href="/users">Usuarios</a>
            <div className="pl-5">
                <h1 className="font-semibold text-xl">Usuarios</h1>
                <AddButton>hola</AddButton>
                <AcceptButton>hola</AcceptButton>
                <CancelButton>hola</CancelButton>
                <EditButton>hola</EditButton>
            </div>
        </div>
    );
}
 
export default Users;