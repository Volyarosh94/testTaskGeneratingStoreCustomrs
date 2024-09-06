import { ObjectId } from 'mongodb';

import ICustomer from '../interfaces/customer.interface';

import CustomerAnonymisedModel from '../models/customer-anonymised.model';

const upsertCustomerAnonimously = async (documentId: ObjectId, anonymizedCustomer: ICustomer): Promise<void> => {
  try {
    await CustomerAnonymisedModel.findOneAndUpdate(
      { _id: documentId },
      { $set: anonymizedCustomer },
      { upsert: true, new: true, useFindAndModify: false }
    );
  } catch (error) {
    console.error('Error upserting anonymized customer:', error);
  }
};

export default upsertCustomerAnonimously