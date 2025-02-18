import { useState } from 'react';
import { AddButton } from '@/components/button';
import { RegisterPurchaseDialog } from '@/components/purchases';

export const RegisterPurchaseButton = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <AddButton onClick={()=>setOpen(true)}>Registrar compra</AddButton>
      <RegisterPurchaseDialog open={open} setOpen={setOpen} />
    </div>
  )
}
