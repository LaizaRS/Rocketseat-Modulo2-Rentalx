import { Router } from "express";

import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";
import { SpecificationsRepository } from "../modules/cars/repositories/SpecificationsRepository";

const specificationRoutes = Router();

const specificationRepository = new SpecificationsRepository()

specificationRoutes.post("/", (request, response) => {
  const {name, description} = request.body

  const createSpecificationServicer = new CreateSpecificationService(specificationRepository)

  createSpecificationServicer.execute({name, description})

  return response.status(201).send()
})

export {specificationRoutes}