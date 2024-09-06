import { model } from 'mongoose';
import CustomerSchema from './customer.schema';

const CustomerModel = model('Customer', CustomerSchema);
export default CustomerModel;
