import { z } from "zod";

const utilSchema = z.object({
  id: z.number(),
  nombre: z.string(),
});

const detalleCompraSchema = z.object({
  id: z.number().optional(),
  util: utilSchema,
  cantidad: z.number().min(1, "La cantidad debe ser al menos 1."),
  precio_unitario: z.number().min(0, "El precio unitario debe ser al menos 0."),
});

const purchaseSchema = z.object({
  id: z.number().optional(),
  fecha: z.date({
    required_error: "La fecha de compra es requerida.",
  }),
  detalle_compra: z.array(detalleCompraSchema).min(1, {
    message: "La compra debe comprender por lo menos 1 útil.",
  }),
});

export { purchaseSchema };
