import { z } from "zod";

export const categorySchema = z.object({
    name: z.string({
        required_error: "O campo nome é obrigatório.",
        invalid_type_error: "O campo nome deve ser uma string"
    })
        .min(3, { message: "O nome deve ter mais que 3 caracteres." })
        .max(30, { message: "O nome deve ter no máximo 30 caracteres." }),
})