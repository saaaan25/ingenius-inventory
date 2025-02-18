import { useContext } from 'react';
import { UserContext } from '@/providers';

export const useUser = () => {
    const { selectedUser,setSelectedUser } = useContext(UserContext);
    return { selectedUser, setSelectedUser };
}