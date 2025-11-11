import { Router } from "express";


import {  creatCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategory";


const categoriesRoutes = Router();


categoriesRoutes.post("/", (request, response) =>{
  return  creatCategoryController.handle(request, response)
});

categoriesRoutes.get("/", (request, response) => {
return listCategoriesController.handle(request, response)
})

 export { categoriesRoutes };

