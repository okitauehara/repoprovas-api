import { getRepository } from 'typeorm';
import Periods from '../entities/Periods';
import Subjects from '../entities/Subjects';

async function get(): Promise<Subjects[]> {
  const result = await getRepository(Subjects).find();
  return result;
}

async function getByPeriod(): Promise<Periods[]> {
  const result = await getRepository(Periods).find({
    relations: ['subjects'],
    order: {
      id: 'ASC',
    },
  });
  return result;
}

export {
  get,
  getByPeriod,
};
