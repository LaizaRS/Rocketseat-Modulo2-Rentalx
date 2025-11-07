import { Category } from "../model/Category";
import { ICategoryRepository, ICreateCategoryDTO } from "./ICategoriesRepository";

//DTO Data Transfer object

class CategoriesRepository implements ICategoryRepository {
  private categories: Category[] = [];

  constructor() {
    this.categories = [];
  }

  create({ name, description } : ICreateCategoryDTO): void {
    const category: Category  = new Category();
  
  Object.assign(category, {
    name,
    description,
    created_at: new Date()
  })

  this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category | undefined {
  const category = this.categories.find(category => category.name === name)
   return category;
  }
}

export { CategoriesRepository };

