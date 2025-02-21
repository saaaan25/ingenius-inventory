import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DeleteUserButton, EditUserButton } from "../button";
import { useUsers } from "@/hooks";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const UserCard = (user) => {
  const { setSelectedUser } = useUsers();
  return (
    <Card className="flex w-full justify-between bg-button py-1  px-5">
      <div className="flex flex-row gap-5">
        <Avatar className="rounded-sm w-15 h-15 my-auto">
          <AvatarImage src={user.imagen} alt={user.nombre} className="object-cover w-full h-full" />
          <AvatarFallback>{user.nombre}</AvatarFallback>
        </Avatar>
        <CardHeader className="flex flex-col pl-0 text-start">
          <CardTitle>
            <span>{user.nombre}</span>
            <span> </span>
            <span>{user.apellido}</span>
          </CardTitle>
          <CardDescription>{user.email}</CardDescription>
        </CardHeader>
      </div>
      <div className="flex items-center gap-2" onClick={() => setSelectedUser(user)}>
        <EditUserButton />
        <DeleteUserButton />
      </div>
    </Card>
  );
};
