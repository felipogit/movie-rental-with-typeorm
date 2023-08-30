import { handleErrors } from "./handleErrors.midlewares";
import { validateBody } from "./validateBody.middleware";
import { verifyIdExists } from "./verifyIdExists.middleware";
import { pagination } from "./pagination.middleware";
import { verifyNameExists } from "./validateNameExists.middleware";

export default { handleErrors, validateBody, verifyIdExists, pagination, verifyNameExists };