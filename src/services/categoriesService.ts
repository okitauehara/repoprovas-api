import { getRepository } from 'typeorm';
import Categories from '../entities/Categories';

async function get() {
  const result = await getRepository(Categories).find();
  console.log(result);
  return result;
}

export {
  get,
};
