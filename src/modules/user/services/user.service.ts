import { userSchema } from "validators/user/userSchema";
import { CreateUserDTO } from "../dtos/create-user.dto";
import { UserRepository } from "../repositories/user.repository";
import { CustomError } from "errors/CustomError";

export class UserService {
    private userRepository: UserRepository

    constructor() {
        this.userRepository = new UserRepository();
    }

    async createUser(data: CreateUserDTO) {
        const validateSchema = userSchema.safeParse(data)

        if (!validateSchema.success) {
            const errors = validateSchema.error.errors.map((err) => ({
                message: err.message,
                path: err.path
            }))

            throw new CustomError("Erro na validação", 400, errors)
        }

        const { name, username, password, permission } = data;

        return await this.userRepository.create({ name, username, password, permission })
    }
}