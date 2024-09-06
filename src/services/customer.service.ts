import formCustomersBatch from './faker.service'
import { saveCustomers } from '../repositories/customer.repository';

import { CREATE_CUSTOMERS_INTERVAL } from '../constants/constants';

const generateCustomers = async (): Promise<void> => {
  setInterval(async () => {
    try {
      const customersData = formCustomersBatch();
      await saveCustomers(customersData);
    } catch (error) {
      console.error('Error generating customers:', error);
    }
  }, CREATE_CUSTOMERS_INTERVAL);
};

export default generateCustomers