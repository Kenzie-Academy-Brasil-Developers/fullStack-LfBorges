import { z } from "zod";

export const editModalSchema = z.object({
  full_name: z.string(),
  email: z.string().refine((value) => value === null || value === '' || /^\S+@\S+\.\S+$/.test(value), {
    message: "Forneça um e-mail válido ou deixe em branco.",
  }),
  phone_number: z.string().nullable().refine((value) => value === null || value === '' || /^\d{10,11}$/.test(value), {
    message: "Forneça um número de telefone válido com DDD ou deixe em branco.",
  }),
});