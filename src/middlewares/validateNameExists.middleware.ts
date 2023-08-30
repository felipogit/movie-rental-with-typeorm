import { NextFunction ,Request, Response } from "express";
import { movieRepo } from "../repositories";
import { Movie } from "../entities";
import { AppError } from "../errors";

const verifyNameExists = async (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.body;
    const existingMovie: Movie | null = await movieRepo.findOneBy({ name });

    if (existingMovie && existingMovie.id !== Number(req.params.id)) {
        throw new AppError('Movie already exists.', 409);
    }

    return next();
}

export { verifyNameExists };
