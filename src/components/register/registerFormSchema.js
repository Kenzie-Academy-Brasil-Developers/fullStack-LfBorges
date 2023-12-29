import { z } from 'zod';

export const registerFormSchema = z.object({
    full_name: z.string().min(3, 'o nome precisa ter no mínimo 3 caracteres'),
    email: z.string().min(1, 'O email e obrigatorio').email('O email precisa ser válido'),
    password: z.string().min(6, 'A senha precisa ter no mínimo 6 caracteres'),
    phone_number: z.string().min(1, 'O telefone e obrigatorio'),
})