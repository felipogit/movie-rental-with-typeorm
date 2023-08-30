import { Request, Response } from "express"
import { Movie } from "../entities"
import { moviesServices } from "../services"
import { MovieRead, Pagination } from "../interfaces"

const create = async (req: Request, res: Response): Promise<Response> => {
    const movies: Movie = await moviesServices.create(req.body)

    return res.status(201).json(movies)
}

const readAll = async (req: Request, res: Response): Promise<Response> => {
    const { pagination } = res.locals
    const movies:Pagination = await moviesServices.readAll(pagination)
    return res.status(200).json(movies)
}

const partialUpdate = async (req: Request, res: Response): Promise<Response> => {
    const { foundMovie } = res.locals;
    const { body } = req;
    const product: Movie = await moviesServices.partialUpdate(foundMovie, body)
    return res.status(200).json(product)
}

const destroy = async (req: Request, res: Response): Promise<Response> => {
    await moviesServices.destroy(res.locals.foundMovie)
    return res.status(204).json()

}

export default { create, readAll, destroy, partialUpdate}
