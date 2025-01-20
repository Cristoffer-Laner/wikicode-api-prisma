import { userSchema } from "validators/user/userSchema";
import { z } from "zod";

export type CreateUserDTO = z.infer<typeof userSchema>