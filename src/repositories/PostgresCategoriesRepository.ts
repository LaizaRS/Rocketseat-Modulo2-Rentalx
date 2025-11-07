import { Category } from "../model/Category";
import { ICreateCategoryDTO, ICategoryRepository  } from "./ICategoriesRepository";

class PostgresCategoriesRepository implements ICategoryRepository {

  findByName(name: string): Category {
    console.log(name)
    throw new Error("Method not implemented.");
  }
  list(): Category[] {
    throw new Error("Method not implemented.");
  }
  creat({name, description }: ICreateCategoryDTO): void {
    console.log(name, description)
  }

}

export { PostgresCategoriesRepository }