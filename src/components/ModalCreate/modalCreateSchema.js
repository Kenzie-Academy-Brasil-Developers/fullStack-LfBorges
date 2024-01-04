import { z } from "zod";

export const modalCreateSchema = z.object({
   full_name: z.string().min(1,"Insira o nome do contato!"),
   email: z.string().email("Insira um email Valido.").min(1, "O email é obrigatório."),
   phone_number: z.string().min(1, "O celular é obrigatório.")
})