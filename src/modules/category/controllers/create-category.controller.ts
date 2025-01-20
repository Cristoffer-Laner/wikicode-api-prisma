import { Request, Response } from "express";
import { CategoryService } from "../services/category.service";
import { CustomError } from "errors/CustomError";

export class CreateCategoryController {
    async handle(req: Request, res: Response) {
        try {
            const { body } = req

            const categoryService = new CategoryService();

            const newCategory = await categoryService.createCategory(body)

            res.status(201).json({ message: "Categoria criada com sucesso!", newCategory })
        } catch (error: any) {
            if (error instanceof CustomError) {
                res.status(error.statusCode).json({
                    message: error.message,
                    errors: error.details
                });
                return
            }

            res.status(500).json({ error })
        }
    }
}