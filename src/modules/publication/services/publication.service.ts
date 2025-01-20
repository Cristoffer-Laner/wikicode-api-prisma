import { publicationSchema } from "validators/publication/publicationSchema";
import { CreatePublicationDTO } from "../dtos/create-publication.dto";
import { PublicationRepository } from "../repositories/publication.repository";
import { CustomError } from "errors/CustomError";

export class PublicationService {
    private publicationRepository: PublicationRepository

    constructor() {
        this.publicationRepository = new PublicationRepository();
    }

    async createPublication(data: CreatePublicationDTO) {
        const validateSchema = publicationSchema.safeParse(data);

        if (!validateSchema.success) {
            const errors = validateSchema.error.errors.map((err) => ({
                message: err.message,
                path: err.path
            }))

            throw new CustomError("Erro na validação", 400, errors)
        }

        const { title, subtitle, description, isPublic, category_id, user_id, participants, sum, num } = data;

        return await this.publicationRepository.create({ title, subtitle, description, isPublic, category_id, user_id, participants, sum, num });
    }
}