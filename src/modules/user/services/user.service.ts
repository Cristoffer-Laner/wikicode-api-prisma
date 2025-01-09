import { CreateUserDTO } from "../dtos/create-user.dto";
import { UserRepository } from "../repositories/user.repository";

export class UserService {
    private userRepository: UserRepository

    constructor() {
        this.userRepository = new UserRepository();
    }

    async createUser(data: CreateUserDTO) {
        const { name, username, password, permission } = data;

        if (!name || !username || !password || !permission) {
            throw new Error("Faltando um dos atributos de usuário: nome, usuário, senha ou permissão.")
        }

        return await this.userRepository.create({ name, username, password, permission })
    }
}