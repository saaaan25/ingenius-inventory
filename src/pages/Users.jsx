import { AddButton } from "@/components/button";
import { RoleUsersList } from "@/components/users";

const Users = () => {
  return (
    <div className="flex flex-col w-full h-full items-start justify-start gap-y-3">
      <a className="font-light text-routes text-sm" href="/users">
        Usuarios
      </a>
      <div className="pl-5">
        <div className="flex">
          <h1 className="font-semibold text-xl">Usuarios</h1>
          <AddButton>Registrar usuario</AddButton>
        </div>
        <RoleUsersList />
      </div>
    </div>
  );
};

export default Users;
