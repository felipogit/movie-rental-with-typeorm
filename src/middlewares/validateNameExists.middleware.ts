import { NextFunction ,Request, Response } from "express";
import { movieRepo } from "../repositories";
import { Movie } from "../entities";
import { AppError } from "../errors";

const verifyNameExists = async (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.body;
    if(!name) {
        return next();
    }
    const existingMovie: Movie | null = await movieRepo.findOneBy({ name });

    if (existingMovie) {
        throw new AppError('Movie already exists.', 409);
    }

    return next();
}

export { verifyNameExists };
