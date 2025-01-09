import { Router } from "express";
import categoryRoutes from "./category.routes";
import userRoutes from "./user.routes";
import publicationRoutes from "./publication.routes";

const router = Router();

router
    .use('/users', userRoutes)
    .use('/publications', publicationRoutes)
    .use('/categories', categoryRoutes)

export { router }