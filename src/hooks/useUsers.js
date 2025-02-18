import { useContext } from 'react';
import { UsersContext } from '@/providers';

export const useUsers = () => {
    const { users, setUsers,createUser } = useContext(UsersContext);
    return { users, setUsers,createUser };
}