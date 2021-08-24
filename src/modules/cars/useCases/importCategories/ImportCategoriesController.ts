import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ImportCategoriesUseCase } from './ImportCategoriesUseCase';

class ImportCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request;

    const importCategories = container.resolve(ImportCategoriesUseCase);

    if (file) {
      await importCategories.execute(file);
    }
    return response.status(201).send('ok');
  }
}

export { ImportCategoriesController };
