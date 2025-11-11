import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";

import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";


const categoriesRepository =  CategoriesRepository.getInstance();

const listSpecificationUseCase = new CreateSpecificationUseCase(categoriesRepository)

const createSpecificationController = new CreateSpecificationController(listSpecificationUseCase)


export { createSpecificationController };