import { ObjectId } from 'mongodb';

import ICustomer from '../interfaces/customer.interface';

import generateDeterministicString from '../helpers/deterministic-string.helper';
import upsertCustomerAnonimously from '../repositories/anonimised-customer.repository'
import { findCustomerById } from '../repositories/customer.repository'

const generateCustomerAnomimously = async (documentId: ObjectId): Promise<void> => {
  try {
    const customer = await findCustomerById(documentId);
    if (customer) {
      const anonymizedCustomer = formAnomimousCustomer(customer);
      await upsertCustomerAnonimously(documentId, anonymizedCustomer);
    }
  } catch (error) {
    console.error('Error generating anonymous customer:', error);
  }
}

const formAnomimousCustomer = (customer: ICustomer): ICustomer => ({
  firstName: generateDeterministicString(customer.firstName),
  lastName: generateDeterministicString(customer.lastName),
  email: `${generateDeterministicString(customer.email.split('@')[0])}@${customer.email.split('@')[1]}`,
  address: {
    line1: generateDeterministicString(customer.address.line1),
    line2: generateDeterministicString(customer.address.line2),
    postcode: generateDeterministicString(customer.address.postcode),
    city: customer.address.city,
    state: customer.address.state,
    country: customer.address.country,
  },
});

export default generateCustomerAnomimously