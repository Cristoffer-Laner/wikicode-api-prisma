import { publicationSchema } from "validators/publication/publicationSchema";
import { CreatePublicationDTO } from "../dtos/create-publication.dto";
import { PublicationRepository } from "../repositories/publication.repository";

export class PublicationService {
    private publicationRepository: PublicationRepository

    constructor() {
        this.publicationRepository = new PublicationRepository();
    }

    async createPublication(data: CreatePublicationDTO) {
        const validateSchema = publicationSchema.safeParse(data);

        if (!validateSchema.success) {
            throw validateSchema.error.errors
        }

        const { title, subtitle, description, isPublic, category_id, user_id, participants, sum, num } = data;

        return await this.publicationRepository.create({ title, subtitle, description, isPublic, category_id, user_id, participants, sum, num });
    }
}