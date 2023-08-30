import { NextFunction, Response, Request } from "express"
import { ZodTypeAny } from "zod"

const validateBody = (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction): void => {
    const parsedBody = schema.parse(req.body);
    req.body = schema.parse(req.body);
    next();
}

export { validateBody }