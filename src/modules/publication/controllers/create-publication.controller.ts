import { Request, Response } from "express";
import { PublicationService } from "../services/publication.service";

export class CreatePublicationController {
    async handle(req: Request, res: Response) {
        try {
            const { body } = req

            const publicationService = new PublicationService();

            const newPublication = await publicationService.createPublication(body)

            res.status(201).json({ message: "Publicação criada com sucesso!", newPublication })
        } catch (error: any) {
            res.status(400).json({ error })
        }
    }
}