import React from 'react'
import { EditButton } from './EditButton';
import { useState } from 'react';
import { EditPurchaseDialog } from '../purchase';

export const EditPurchaseButton = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='w-full mt-5'>
      <EditButton onClick={()=>setOpen(true)}>Editar compra</EditButton>
      <EditPurchaseDialog open={open} setOpen={setOpen} />
    </div>
  )
}
