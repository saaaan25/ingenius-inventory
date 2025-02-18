import { useUsers } from '@/hooks'
import { groupUsersByRole } from '@/utils';
import { RoleUsersItem } from './RoleUsersItem';
import React from 'react'

export const RoleUsersList = () => {
  const {users}=useUsers();
  return (
    <>
      {groupUsersByRole(users).map((roleUsersItem, index) => (
        <RoleUsersItem key={index} {...roleUsersItem} />
      ))}
    </>
  )
}
