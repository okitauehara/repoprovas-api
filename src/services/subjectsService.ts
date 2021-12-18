import { getRepository } from 'typeorm';
import Periods from '../entities/Periods';
import Subjects from '../entities/Subjects';

async function get() {
  const result = await getRepository(Subjects).find();
  return result;
}

async function getByPeriod() {
  const result = await getRepository(Periods).find({
    relations: ['subjects'],
  });
  return result;
}

export {
  get,
  getByPeriod,
};
