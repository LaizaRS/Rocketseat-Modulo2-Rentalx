import { CategoriesRepository } from "../repositories/CategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}
// definir o tipo de retronto 
// altera o retorno de erro
// acessar o repositorio

class CreatCategoryService {
  constructor(private categoriesRepository: CategoriesRepository) {};
  
  execute({description, name}: IRequest): void {
     const categoryAlreadyExists = this.categoriesRepository.findByName(name)
    
      if (categoryAlreadyExists) {
       throw new Error("Category Already exists!")
      }
      
      this.categoriesRepository.create({ name, description })
    
  }
}

export { CreatCategoryService }