import React from 'react'
import { UserCard } from '.'

const roleMap = {
  docente: 'Docentes',
  encargado: 'Encargados',
  administrador: 'Administradores',
};

export const RoleUsersItem = ({ role, users }) => {
  return (
    <div className='mt-5'>
      <p className='text-start font-extrabold'>{roleMap[role]}</p>
      <div className='w-full flex flex-col gap-y-2 mt-2'>
        {users.map((user, index) => (
          <UserCard key={index} {...user} />
        ))} 
      </div>
    </div>
  )
}
