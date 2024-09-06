import { Schema } from 'mongoose';

const AddressSchema = new Schema(
  {
    line1: { type: String, required: true },
    line2: { type: String },
    postcode: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
  },
  { _id: false },
);

const CustomerSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  address: { type: AddressSchema, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default CustomerSchema;
