import React from 'react'
import { Button } from '../ui/button'

export const CancelButton = ({ children }) => {
  return (
    <Button className="bg-white text-red-500 border border-red-500 rounded hover:cursor-pointer hover:bg-red-50 py-4 px-7" size="sm">{children}</Button>
  )
}
