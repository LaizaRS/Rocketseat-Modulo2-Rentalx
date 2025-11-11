import { categoriesRoutes } from "./categories.routes";
import { specificationRoutes } from "./specification.routes";

import { Router } from 'express'

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationRoutes);

export { router }