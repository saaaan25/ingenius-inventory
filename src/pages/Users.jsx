import { RegisterUserButton } from "@/components/button";
import { RoleUsersList } from "@/components/users";
import { UsersProvider } from "@/providers";

const Users = () => {
  return (
    <UsersProvider>
      <div className="flex flex-col w-full h-full items-start justify-start gap-y-3">
        <a className="font-light text-routes text-sm" href="/users">
          Usuarios
        </a>
        <div className="pl-5 w-full h-full">
          <div className="flex justify-between">
            <h1 className="font-semibold text-xl">Usuarios</h1>
            <RegisterUserButton />
          </div>
          <RoleUsersList />
        </div>
      </div>
    </UsersProvider>
  );
};

export default Users;
