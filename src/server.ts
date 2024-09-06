import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import onTriggerCustomersCollection from './observers/customer.observer';
import generateCustomers from './services/customer.service';

dotenv.config();

const app = express();

const connectDB = async () => {

  const dbUri = process.env.DB_URI;
  if (!dbUri) {
    throw new Error('DB_URI environment variable is not set.');
  }

  await mongoose.connect(dbUri);
  console.log(">>> Database connection established <<<")
}

const start = async () => {
  try {

    await connectDB();

    const port = process.env.PORT ? Number(process.env.PORT) : 3000
    app.listen(port, () => {
      console.log('>>>Server started on port ', port, '<<<');
    })
    generateCustomers();
    onTriggerCustomersCollection()
  } catch (error: unknown) {
    console.log('unexpected error occured:', error);
  }
};

start();
