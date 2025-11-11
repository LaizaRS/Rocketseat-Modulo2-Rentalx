
import { Category } from "../../model/Category"
import { ICategoryRepository } from "../../repositories/ICategoriesRepository"


class ListCategoriesUseCase {
  constructor(private categorriesRepository: ICategoryRepository) {}

  execute(): Category[]{  
    const categories = this.categorriesRepository.list()

    return categories
  }
}

export { ListCategoriesUseCase }
