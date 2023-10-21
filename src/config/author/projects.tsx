import { faker } from '@faker-js/faker';
import { TProject } from '../../types';

export const projects: TProject[] = [
  {
    title: faker.company.name(),
    description: faker.lorem.sentence({ min: 15, max: 20 }),
    image: faker.image.url(),
    repository: faker.internet.url(),
    website: faker.internet.url(),
    tags: Array.from({ length: 3 }, () => faker.color.human()),
    featured: true,
    createdAt: faker.date.recent(),
  },
  {
    title: faker.company.name(),
    description: faker.lorem.sentence({ min: 15, max: 20 }),
    image: faker.image.url(),
    repository: faker.internet.url(),
    website: faker.internet.url(),
    tags: Array.from({ length: 3 }, () => faker.color.human()),
    featured: true,
    createdAt: faker.date.recent(),
  },

  //
  // Others

  {
    title: faker.company.name(),
    description: faker.lorem.sentence({ min: 15, max: 20 }),
    repository: faker.internet.url(),
    website: faker.internet.url(),
    tags: Array.from({ length: 3 }, () => faker.color.human()),
    createdAt: faker.date.past({ years: 3, refDate: new Date() }),
  },
  {
    title: faker.company.name(),
    description: faker.lorem.sentence({ min: 15, max: 20 }),
    repository: faker.internet.url(),
    tags: Array.from({ length: 3 }, () => faker.color.human()),
    createdAt: faker.date.past({ years: 4, refDate: new Date() }),
  },
  {
    title: faker.company.name(),
    description: faker.lorem.sentence({ min: 15, max: 20 }),
    repository: faker.internet.url(),
    tags: Array.from({ length: 3 }, () => faker.color.human()),
    createdAt: faker.date.recent(),
  },
  {
    title: faker.company.name(),
    description: faker.lorem.sentence({ min: 15, max: 20 }),
    repository: faker.internet.url(),
    tags: Array.from({ length: 3 }, () => faker.color.human()),
    createdAt: faker.date.past({ years: 3, refDate: new Date() }),
  },
  {
    title: faker.company.name(),
    description: faker.lorem.sentence({ min: 15, max: 20 }),
    website: faker.internet.url(),
    repository: faker.internet.url(),
    tags: Array.from({ length: 3 }, () => faker.color.human()),
    createdAt: faker.date.past({ years: 4, refDate: new Date() }),
  },
];
