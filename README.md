# Customer Management System

This application emulates the operation of a store by constantly generating random customers using [**Faker**](https://www.npmjs.com/package/@faker-js/faker) and adding them to the database. The customers are also anonymized and stored in a separate collection.

## Features

- Generate random customers using Faker
- Anonymize customer data and store it in a separate collection
- Listen for customer updates and apply anonymization
- Batch generation of customers every 200 milliseconds
- Full CRUD operations for customers and anonymized customers

## Technologies

- **Node.js** and **Express.js** for backend development
- **MongoDB** for database management
- **Mongoose** for MongoDB object modeling
- **TypeScript** for static typing
- **Faker.js** for random data generation
- **Prettier** for code formatting

## Prerequisites

Make sure you have the following installed:

- **Node.js**: [Download and install Node.js](https://nodejs.org/)
- **MongoDB**: [Download and install MongoDB](https://www.mongodb.com/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/customer-management-system.git
   cd customer-management-system
   

2. Install dependencies

   ```bash
   npm install


3. Create a .env file and add your MongoDB connection string and desired port (example in file .env.example)


4. Run the application

   ```bash
   npm start
   


## Available Scripts

- **`npm start`**: Starts the Express server.
- **`npm run format`**: Formats code using Prettier.





### FEEDBACK

- The test task took approximately 4 hours:
- There were no particular difficulties, only with the part "Програма "слухає" появу та зміну документів у колекції customers та анонімізує їх:". This is pottentially means that User should have ability to update the document. But I didn`t because there is no mention about that and it will be YAGNI.