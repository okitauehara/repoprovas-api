import { getRepository } from 'typeorm';
import faker from 'faker';
import Periods from '../../src/entities/Periods';
import Subjects from '../../src/entities/Subjects';

async function createPeriod(): Promise<Periods> {
  const fakePeriod = getRepository(Periods).create({
    id: faker.datatype.number(),
    period: faker.lorem.word(),
  });
  await getRepository(Periods).save(fakePeriod);
  return fakePeriod;
}

async function createSubject(): Promise<Subjects> {
  const fakePeriod = await createPeriod();

  const fakeSubject = getRepository(Subjects).create({
    id: faker.datatype.number(),
    subject: faker.lorem.word(),
    period_id: fakePeriod.id,
  });
  await getRepository(Subjects).save(fakeSubject);
  return fakeSubject;
}

export {
  createSubject,
};
