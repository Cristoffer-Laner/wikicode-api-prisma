import { categorySchema } from "validators/category/categorySchema";
import { CreateCategoryDTO } from "../dtos/create-category.dto";
import { CategoryRepository } from "../repositories/category.repository";

export class CategoryService {
    private categoryRepository: CategoryRepository

    constructor() {
        this.categoryRepository = new CategoryRepository();
    }

    async createCategory(data: CreateCategoryDTO) {
        const validateSchema = categorySchema.safeParse(data)

        if (!validateSchema.success) {
            throw validateSchema.error.errors
        }

        const { name } = data;

        return await this.categoryRepository.create({ name })
    }
}