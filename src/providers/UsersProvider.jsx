import { createContext, useState, useEffect } from 'react';
import { toast } from 'sonner';
import { createUser as createUserApi, getUsers as getUsersApi,updateUser as updateUserApi, deleteUser as deleteUserApi } from '@/api';

export const UsersContext = createContext();

export const UsersProvider = ({children}) => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try{
      const usersResponse=await getUsersApi();
      setUsers(usersResponse);
    }
    catch(error){
      console.error(error);
    }
  };

  const createUser = async (newUser) => {
    try{
      const userResponse = await createUserApi(newUser);
      setUsers([...users, userResponse]);
      toast.success("Usuario registrado con éxito");
    }
    catch(error){
      console.error(error);
      toast.error("Error al registrar usuario");
    }
  }

  const updateUser = async (user) => {
    try{
      const userResponse = await updateUserApi(user);
      setUsers((prevUsers) => prevUsers.map((u) => (u.id === user.id ? userResponse : u)));
      toast.success("Usuario actualizado con éxito");
    }
    catch(error){
      console.error(error);
      toast.error("Error al actualizar usuario");
    }
  }

  const deleteUser = async (userId)=>{
    try{
      await deleteUserApi(userId);
      setUsers((prevUsers) => prevUsers.filter((u) => u.id !== userId));
      toast.success("Usuario eliminado con éxito");
    }
    catch(error){
      console.error(error);
      toast.error("Error al eliminar usuario");
    }
  }

  return (
    <UsersContext.Provider value={{ users, setUsers , createUser, updateUser, deleteUser, selectedUser, setSelectedUser}}>
      {children}
    </UsersContext.Provider>
  )
}
