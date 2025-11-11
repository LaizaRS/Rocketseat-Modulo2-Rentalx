import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreatCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";


const creatRepository = CategoriesRepository.getInstance();

const createCategoreUseCase = new CreateCategoryUseCase(creatRepository);

const creatCategoryController = new CreatCategoryController(createCategoreUseCase)


export { creatCategoryController };
