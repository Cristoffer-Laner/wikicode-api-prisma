import { z } from "zod";

export const publicationSchema = z.object({
    title: z.string({
        required_error: "O campo título é obrigatório.",
        invalid_type_error: "O campo título deve ser uma string"
    })
        .min(3, { message: "O título deve ter mais que 3 caracteres." })
        .max(60, { message: "O título deve ter no máximo 60 caracteres." }),
    subtitle: z.string({
        required_error: "O campo subtítulo é obrigatório.",
        invalid_type_error: "O campo subtítulo deve ser uma string"
    })
        .min(5, { message: "O subtítulo deve ter mais que 5 caracteres." })
        .max(60, { message: "O subtítulo deve ter no máximo 20 caracteres." }),
    description: z.string({
        required_error: "O campo descrição é obrigatório.",
        invalid_type_error: "O campo descrição deve ser uma string"
    }),
    isPublic: z.boolean({
        required_error: "O campo visibilidade é obrigatório.",
        invalid_type_error: "O campo visibilidade deve ser um boolean"
    }),
    participants: z.array(
        z.number({
            invalid_type_error: "O campo participantes deve ser um array de números."
        }),
        {
            invalid_type_error: "O campo participantes deve ser um array de números."
        }
    )
        .optional(),
    user_id: z.number({
        required_error: "O campo user_id é obrigatório.",
        invalid_type_error: "O campo user_id deve ser um número"
    }),
    category_id: z.number({
        required_error: "O campo category_id é obrigatório.",
        invalid_type_error: "O campo category_id deve ser um número"
    }),
    sum: z.number({
        invalid_type_error: "O campo sum deve ser um número"
    })
        .optional(),
    num: z.number({
        invalid_type_error: "O campo num deve ser um número"
    })
        .optional()
})