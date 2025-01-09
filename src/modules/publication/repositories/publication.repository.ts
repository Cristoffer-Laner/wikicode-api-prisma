import { prisma } from "databases/prismaClient";
import { CreatePublicationDTO } from "../dtos/create-publication.dto";

export class PublicationRepository {
    async create(data: CreatePublicationDTO) {
        const { title, subtitle, description, isPublic, participants, user_id, category_id } = data

        return await prisma.publication.create({
            data: {
                title,
                subtitle,
                description,
                isPublic,
                user_id,
                category_id,
                participants: participants?.length ?
                    {
                        create: participants.map((user_id: number) => ({ user: { connect: { id: user_id } } })),
                    }
                    :
                    undefined,
            },
        });
    }
}