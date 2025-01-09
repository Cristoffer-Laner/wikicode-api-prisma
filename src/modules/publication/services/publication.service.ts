import { CreatePublicationDTO } from "../dtos/create-publication.dto";
import { PublicationRepository } from "../repositories/publication.repository";

export class PublicationService {
    private publicationRepository: PublicationRepository

    constructor() {
        this.publicationRepository = new PublicationRepository();
    }

    async createPublication(data: CreatePublicationDTO) {
        const { title, subtitle, description, isPublic, category_id, user_id, participants, sum, num } = data;

        if (!title || !subtitle || !description || !isPublic || !category_id || !user_id) {
            throw new Error("Faltando um dos atributos de publicação: titulo, subtitulo, descrição, visibilidade, categoria ou autor.")
        }

        return await this.publicationRepository.create(data);
    }
}