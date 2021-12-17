import { getRepository } from 'typeorm';
import Subjects from '../entities/Subjects';

async function get() {
  const result = await getRepository(Subjects).find();
  return result;
}

export {
  get,
};
