import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { CustomError } from "errors/CustomError";

export class CreateUserController {
    async handle(req: Request, res: Response) {
        try {
            const { body } = req

            const userService = new UserService();

            const newUser = await userService.createUser(body)

            res.status(201).json({ message: "Usuário criado com sucesso!", newUser })
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