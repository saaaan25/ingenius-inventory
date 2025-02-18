import { createContext, useState, useEffect } from 'react';
import { toast } from 'sonner';
import { postUserApiMock, putUserApiMock, getUsersApiMock } from '@/utils';

export const UsersContext = createContext();

export const UsersProvider = ({children}) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try{
      const usersResponse=getUsersApiMock()
      setUsers(usersResponse);
    }
    catch(error){
      console.error(error);
    }
  };

  const createUser = (newUser) => {
    try{
      const userResponse = postUserApiMock(newUser);
      setUsers([...users, userResponse]);
      toast.success("Usuario registrado con éxito");
    }
    catch(error){
      console.error(error);
      toast.error("Error al registrar usuario");
    }
  }

  const updateUser = (user) => {
    try{
      const userResponse = putUserApiMock({
        id: user.id,
        nombre: user.nombre,
        apellido: user.apellido,
        email: user.email,
        rol: user.rol,
      });
      setUsers((prevUsers) => prevUsers.map((u) => (u.id === user.id ? userResponse : u)));
      toast.success("Usuario actualizado con éxito");
    }
    catch(error){
      console.error(error);
      toast.error("Error al actualizar usuario");
    }
  }
  return (
    <UsersContext.Provider value={{ users, setUsers , createUser, updateUser }}>
      {children}
    </UsersContext.Provider>
  )
}
