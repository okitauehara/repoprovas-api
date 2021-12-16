import { getRepository } from 'typeorm';
import Categories from '../entities/Categories';
import NotFound from '../errors/NotFound';

async function get() {
  const result = await getRepository(Categories).find();
  if (!result.length) throw new NotFound('Categories not found');
  return result;
}

export {
  get,
};
