import { z } from "zod";

export const loginFormSchema  = z.object({
    email: z.string().min(1,"Insira o usuario"),
    password: z.string().min(1,"Insira a senha")
})