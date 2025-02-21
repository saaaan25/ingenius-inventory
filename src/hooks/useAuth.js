import { useContext } from 'react';
import { AuthContext } from '@/providers';

export const useAuth= () => {
    const {login,register,user,logout } = useContext(AuthContext);
    return {login,register,user,logout };
}