import { Category } from "../modules/cars/model/Category";

interface ICreateCategoryDTO  {
  name: string;
  description: string;
}

interface ICategoryRepository {
  findByName(name: string): Category | undefined;
  list(): Category[];
  creat({name, description}: ICreateCategoryDTO): void;
}

export type { ICategoryRepository, ICreateCategoryDTO };

