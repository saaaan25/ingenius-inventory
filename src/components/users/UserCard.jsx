import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DeleteUserButton, EditUserButton } from "../button";
import { useUsers } from "@/hooks";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const UserCard = (user) => {
  const { setSelectedUser } = useUsers();
  const defaultAvatarUrl = "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg";
  const avatarUrl = user.photo_url && user.photo_url.trim() !== "" ? user.photo_url : defaultAvatarUrl;

  return (
    <Card className="flex w-full justify-between bg-button py-1  px-5">
      <div className="flex flex-row gap-5">
        <Avatar className="rounded-sm w-15 h-15 my-auto">
          <AvatarImage src={avatarUrl} alt={user.name} className="object-cover w-full h-full" />
          <AvatarFallback>{user.name}</AvatarFallback>
        </Avatar>
        <CardHeader className="flex flex-col pl-0 text-start">
          <CardTitle>
            <span>{user.name}</span>
            <span> </span>
            <span>{user.last_name}</span>
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
