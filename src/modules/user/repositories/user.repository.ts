import { prisma } from "databases/prismaClient";
import { CreateUserDTO } from "../dtos/create-user.dto";

export class UserRepository {
    async create(data: CreateUserDTO) {
        const { name, username, password, permission } = data;

        return await prisma.user.create({
            data: {
                name, username, password, permission
            }
        })
    }
}