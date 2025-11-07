import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { CreatCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";


const creatRepository = new CategoriesRepository();

const createCategoreUseCase = new CreateCategoryUseCase(creatRepository);

const creatCategoryController = new CreatCategoryController(createCategoreUseCase)


export { creatCategoryController };
