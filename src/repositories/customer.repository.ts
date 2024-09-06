import { ObjectId } from 'mongodb';

import ICustomer from '../interfaces/customer.interface';

import CustomerModel from '../models/customer.model';


export const saveCustomers = async (customersData: ICustomer[]): Promise<void> => {
  try {
    await CustomerModel.insertMany(customersData);
  } catch (error) {
    console.error('Error saving customers:', error);
  }
};

export const findCustomerById = async (documentId: ObjectId): Promise<ICustomer | null> => {
  try {
    const customer = await CustomerModel.findById(documentId).exec();
    return customer as ICustomer;
  } catch (error) {
    console.error('Error finding customer by ID:', error);
    throw new Error('Error finding customer by ID');
  }
};