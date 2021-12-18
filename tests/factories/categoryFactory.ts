import { getRepository } from 'typeorm';
import faker from 'faker';
import Categories from '../../src/entities/Categories';

export async function createCategory() {
  const fakeCategory = getRepository(Categories).create({
    id: faker.datatype.number(),
    category: faker.lorem.word(),
  });
  await getRepository(Categories).save(fakeCategory);
  return fakeCategory;
}
