import { getRepository } from 'typeorm';
import Categories from '../entities/Categories';

async function get(): Promise<Categories[]> {
  const result = await getRepository(Categories).find();
  return result;
}

export {
  get,
};
