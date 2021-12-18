import { getRepository } from 'typeorm';
import Subjects from '../entities/Subjects';

async function get() {
  const result = await getRepository(Subjects).find();
  return result;
}

async function getByPeriod() {

}

export {
  get,
  getByPeriod,
};
