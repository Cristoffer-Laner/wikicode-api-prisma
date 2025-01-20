import { Request, Response } from "express";
import { PublicationService } from "../services/publication.service";
import { CustomError } from "errors/CustomError";

export class CreatePublicationController {
    async handle(req: Request, res: Response) {
        try {
            const { body } = req

            const publicationService = new PublicationService();

            const newPublication = await publicationService.createPublication(body)

            res.status(201).json({ message: "Publicação criada com sucesso!", newPublication })
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