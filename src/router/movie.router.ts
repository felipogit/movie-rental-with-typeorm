import { Router } from "express";
import { moviesControllers } from "../controllers";
import middlewares from "../middlewares";
import { movieCreateSchema, movieUpdateSchema } from "../schemas";

const movieRouter: Router = Router();

movieRouter.post("",middlewares.verifyNameExists, middlewares.validateBody(movieCreateSchema), moviesControllers.create);
movieRouter.get("", middlewares.pagination, moviesControllers.readAll);

movieRouter.use('/:id', middlewares.verifyIdExists);

movieRouter.patch('/:id', middlewares.validateBody(movieUpdateSchema), middlewares.verifyNameExists, moviesControllers.partialUpdate);
movieRouter.delete("/:id", moviesControllers.destroy);

export default movieRouter