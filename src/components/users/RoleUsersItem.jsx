import React from 'react'
import { UserCard } from '.'

export const RoleUsersItem = ({rol,users}) => {
  return (
    <div>
      <p>{rol}</p>
      <div>
        {users.map((user, index) => (
          <UserCard key={index} {...user} />
        ))} 
      </div>
    </div>
  )
}
