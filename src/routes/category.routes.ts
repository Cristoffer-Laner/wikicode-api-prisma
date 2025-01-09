import { Router } from "express";
import { CreateCategoryController } from "modules/category/controllers/create-category.controller";

const categoryRoutes = Router();

const createCategory = new CreateCategoryController();

categoryRoutes
    .post('/create', createCategory.handle)

export default categoryRoutes