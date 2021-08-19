import { Category } from '../models/Category';

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICreateCategoryRepository {
  create(data: ICreateCategoryDTO): void;
  list(): Array<Category>;
  findByName(name: string): Category | undefined;
}

export { ICreateCategoryDTO, ICreateCategoryRepository };
