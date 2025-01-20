import { z } from "zod";

export const userSchema = z.object({
    name: z.string({
        required_error: "O campo nome é obrigatório.",
        invalid_type_error: "O campo nome deve ser uma string"
    })
        .min(3, { message: "O nome deve ter mais que 3 caracteres." })
        .max(20, { message: "O nome deve ter no máximo 20 caracteres." }),
    username: z.string({
        required_error: "O campo username é obrigatório.",
        invalid_type_error: "O campo username deve ser uma string"
    })
        .min(5, { message: "O username deve ter mais que 5 caracteres." })
        .max(20, { message: "O username deve ter no máximo 20 caracteres." })
        .refine((value) => /^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/.test(value ?? ""), 'O username deve ter apenas letras do alfabeto.'),
    password: z.string({
        required_error: "O campo senha é obrigatório.",
        invalid_type_error: "O campo senha deve ser uma string"
    })
        .min(8, { message: "A senha deve ter no mínimo 8 caracteres." })
        .max(60, { message: "A senha deve ter no máximo 60 caracteres." })
        .refine((value) => /(?=.*\d)/.test(value), {
            message: "A senha deve conter pelo menos um número.",
        })
        .refine((value) => /(?=.*[a-z])/.test(value), {
            message: "A senha deve conter pelo menos uma letra minúscula.",
        })
        .refine((value) => /(?=.*[A-Z])/.test(value), {
            message: "A senha deve conter pelo menos uma letra maiúscula.",
        })
        .refine((value) => /(?=.*[$*&@#])/.test(value), {
            message: "A senha deve conter pelo menos um caractere especial ($*&@#).",
        }),
    permission: z.string({
        required_error: "O campo permissão é obrigatório.",
        invalid_type_error: "O campo permissão deve ser uma string"
    })
        .min(3, { message: "A permissão deve ter mais que 3 caracteres." })
        .max(20, { message: "A permissão deve ter no máximo 20 caracteres" })
})