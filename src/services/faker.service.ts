import { faker } from '@faker-js/faker';

import ICustomer from '../interfaces/customer.interface';

import { RANDOMIZE_CUSTOMERS_NUMBER } from '../constants/constants'

const generateRandomCustomer = (): ICustomer => ({
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  address: {
    line1: faker.location.streetAddress(),
    line2: faker.location.secondaryAddress(),
    postcode: faker.location.zipCode(),
    city: faker.location.city(),
    state: faker.location.state(),
    country: faker.location.country(),
  },
});

export const formCustomersBatch = (): ICustomer[] => {
  try {
    return faker.helpers.multiple(generateRandomCustomer, {
      count: RANDOMIZE_CUSTOMERS_NUMBER,
    });
  } catch (error) {
    console.error('Error generating customers batch:', error);
    return [];
  }
};

export default formCustomersBatch