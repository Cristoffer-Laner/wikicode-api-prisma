import { categorySchema } from "validators/category/categorySchema";
import { z } from "zod";

export type CreateCategoryDTO = z.infer<typeof categorySchema>