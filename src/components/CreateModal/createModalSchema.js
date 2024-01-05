import { z } from "zod";

export const createModalSchema = z.object({
    full_name: z.string().min(1,"O nome é obrigatório."),
    email: z.string().min(1, "O e-mail é obrigatório").email("Forneça um e-mail válido."),
    phone_number: z.string().min(1,"O contato é obrigatório.").regex(/^\d{10,11}$/, "O contato precisa ser um número de telefone válido com DDD"),
})