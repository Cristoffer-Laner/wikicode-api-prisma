import { Request, Response } from "express";
import { CategoryService } from "../services/category.service";

export class CreateCategoryController {
    async handle(req: Request, res: Response) {
        try {
            const { body } = req

            const categoryService = new CategoryService();

            const newCategory = await categoryService.createCategory(body)

            res.status(201).json({ message: "Categoria criada com sucesso!", newCategory })
        } catch (error: any) {
            res.status(400).json({ error: error.message })
        }
    }
}