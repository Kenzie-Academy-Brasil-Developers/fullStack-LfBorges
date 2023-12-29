import { z } from 'zod';

export const loginFormSchema = z.object({
    email: z.string().min(1, 'O email e obrigatorio').email('O email precisa ser válido'),
    password: z.string().min(6, 'A senha precisa ter no mínimo 6 caracteres'),
})
