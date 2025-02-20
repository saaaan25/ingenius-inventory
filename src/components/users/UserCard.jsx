import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DeleteUserButton, EditUserButton } from "../button";
import { useUser } from "@/hooks";

export const UserCard = (user) => {
  const {setSelectedUser} = useUser();
  return (
    <div className="flex w-full">
      <div className="flex">
        <Avatar className="rounded-sm size-28">
          <AvatarImage src={user.imagen} alt={user.nombre} className="bg-cover" />
          <AvatarFallback>{user.nombre}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <div>
            <span>{user.nombre}</span>
            <span>{user.apellido}</span>
          </div>
          <p>{user.email}</p>
        </div>
      </div>
      <div className="flex" onClick={() => setSelectedUser(user)}>
        <EditUserButton />
        <DeleteUserButton />
      </div>
    </div>
  );
};
