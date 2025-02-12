import { z } from "zod";

const detalleCompraSchema = z.object({
  util: z.number(),
  cantidad: z.number(),
  precio_unitario: z.number(),
});

const purchaseSchema = z.object({
  fecha: z.date({
    required_error: "La fecha de compra es requerida.",
  }),
  detalle_compra: z.array(detalleCompraSchema).min(1, {
    message: "La compra debe comprender por lo menos 1 útil.",
  }),
});

export { purchaseSchema };
