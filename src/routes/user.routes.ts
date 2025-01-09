import { Router } from "express";
import { CreateUserController } from "modules/user/controllers/create-user.controller";

const userRoutes = Router();

const createUser = new CreateUserController();

userRoutes
    .post('/create', createUser.handle)

export default userRoutes