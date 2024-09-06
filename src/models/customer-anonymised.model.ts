import { model } from 'mongoose';
import CustomerSchema from './customer.schema';

const CustomerAnonymisedModel = model('AnonymisedCustomer', CustomerSchema);
export default CustomerAnonymisedModel;
