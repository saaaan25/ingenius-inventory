import { z } from "zod";

const utilSchema = z.object({
  id: z.string(),
  name: z.string(),
});

const detalleCompraSchema = z.object({
  id: z.string().optional(),
  util: utilSchema,
  quantity: z.number().min(1, "La cantidad debe ser al menos 1."),
  unit_price: z.number().min(0, "El precio unitario debe ser al menos 0."),
});

export const purchaseSchema = z.object({
  id: z.string().optional(),
  date: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "La fecha de compra debe ser una fecha y hora válida en formato ISO.",
  }),
  purchase_detail: z.array(detalleCompraSchema).min(1, {
    message: "La compra debe comprender por lo menos 1 útil.",
  }),
});

export const userSchema = (defaultUser) => {
  const baseSchema = {
    id: z.string().optional(),
    name: z.string().min(1, "El nombre es requerido."),
    last_name: z.string().min(1, "El apellido es requerido."),
    email: z.string().email("El email no es válido."),
    photo_url: z.string().refine(
      (value) => value === "" || z.string().url().safeParse(value).success,
      {
        message: "La URL de la imagen no es válida.",
      }
    ).optional(),
    role: z.enum(["administrador", "profesor", "encargado"], "El rol no es válido."),
  };

  if (!defaultUser) {
    baseSchema.password = z.string().min(6, "La contraseña debe tener al menos 6 caracteres.");
  }

  return z.object(baseSchema);
};


