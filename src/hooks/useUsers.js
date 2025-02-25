import { useContext } from 'react';
import { UsersContext } from '@/providers';

export const useUsers = () => {
    const { users, setUsers,createUser,updateUser, deleteUser, selectedUser, setSelectedUser } = useContext(UsersContext);
    return { users, setUsers,createUser, updateUser, deleteUser,selectedUser, setSelectedUser };
}