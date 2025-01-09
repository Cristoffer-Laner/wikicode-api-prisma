import { prisma } from "databases/prismaClient";
import { CreateCategoryDTO } from "../dtos/create-category.dto";

export class CategoryRepository {
    async create(data: CreateCategoryDTO) {
        const { name } = data;

        return await prisma.category.create({
            data: {
                name
            }
        })
    }
}