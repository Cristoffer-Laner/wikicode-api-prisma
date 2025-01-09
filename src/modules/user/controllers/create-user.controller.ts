import { Request, Response } from "express";
import { UserService } from "../services/user.service";

export class CreateUserController {
    async handle(req: Request, res: Response) {
        try {
            const { body } = req

            const userService = new UserService();

            const newUser = await userService.createUser(body)

            res.status(201).json({ message: "Usuário criado com sucesso!", newUser })
        } catch (error: any) {
            res.status(400).json({ error: error.message })
        }
    }
}