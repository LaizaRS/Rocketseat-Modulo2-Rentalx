import { Router } from "express";

import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import {  creatCategoryController } from "../modules/cars/useCases/createCategory";


const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) =>{
  return  creatCategoryController.handle(request, response)
});

categoriesRoutes.get("/", (request, response) => {
  const all = categoriesRepository.list();
  return response.json({all});
})

 export { categoriesRoutes };

