import { Request, Response } from "express";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";


class ListCategoriesController {
  constructor(private listeCategoriesUseCase: ListCategoriesUseCase) {}
 

  handle(request: Request, response: Response): Response {
  const all = this.listeCategoriesUseCase.execute();
  return response.json({all});
}}

export { ListCategoriesController };

