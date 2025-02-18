import React from 'react'

export const UserCard = ({imagen,nombre,apellido,correo}) => {
  return (
    <div>
      <img src={imagen} alt={nombre}/>
      <p>{nombre}</p>
      <p>{apellido}</p>
      <p>{correo}</p> 
    </div>
  )
}
