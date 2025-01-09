import { CreateCategoryDTO } from "../dtos/create-category.dto";
import { CategoryRepository } from "../repositories/category.repository";

export class CategoryService {
    private categoryRepository: CategoryRepository

    constructor() {
        this.categoryRepository = new CategoryRepository();
    }

    async createCategory(data: CreateCategoryDTO) {
        const { name } = data;

        if (!name) {
            throw new Error("Faltando um dos atributos de categoria: nome.")
        }

        return await this.categoryRepository.create({ name })
    }
}