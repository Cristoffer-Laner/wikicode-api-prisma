import { categorySchema } from "validators/category/categorySchema";
import { CreateCategoryDTO } from "../dtos/create-category.dto";
import { CategoryRepository } from "../repositories/category.repository";
import { CustomError } from "errors/CustomError";

export class CategoryService {
    private categoryRepository: CategoryRepository

    constructor() {
        this.categoryRepository = new CategoryRepository();
    }

    async createCategory(data: CreateCategoryDTO) {
        const validateSchema = categorySchema.safeParse(data)

        if (!validateSchema.success) {
            const errors = validateSchema.error.errors.map((err) => ({
                message: err.message,
                path: err.path
            }))

            throw new CustomError("Erro na validação", 400, errors)
        }

        const { name } = data;

        return await this.categoryRepository.create({ name })
    }
}