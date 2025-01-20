import { userSchema } from "validators/user/userSchema";
import { CreateUserDTO } from "../dtos/create-user.dto";
import { UserRepository } from "../repositories/user.repository";

export class UserService {
    private userRepository: UserRepository

    constructor() {
        this.userRepository = new UserRepository();
    }

    async createUser(data: CreateUserDTO) {
        const validateSchema = userSchema.safeParse(data)

        if (!validateSchema.success) {
            throw validateSchema.error.errors
        }

        const { name, username, password, permission } = data;

        return await this.userRepository.create({ name, username, password, permission })
    }
}