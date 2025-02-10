import React from 'react'
import { Button } from '../ui/button'

export const CancelButton = ({ children, onClick, type }) => {
  return (
    <Button
      className="bg-white text-red-500 border border-red-500 rounded hover:cursor-pointer hover:bg-red-50 py-4 px-7"
      size="sm"
      onClick={onClick}
      type={type}
    >
      {children}
    </Button>
  )
}
