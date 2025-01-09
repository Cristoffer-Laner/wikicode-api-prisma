import { Router } from "express";
import { CreateCategoryController } from "modules/category/controllers/create-category.controller";
import { CreatePublicationController } from "modules/publication/controllers/create-publication.controller";

const publicationRoutes = Router();

const createPublication = new CreatePublicationController();

publicationRoutes
    .post('/create', createPublication.handle)

export default publicationRoutes