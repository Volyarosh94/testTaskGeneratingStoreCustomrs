import { ObjectId } from 'mongodb';
import CustomerModel from '../models/customer.model';
import generateCustomerAnomimously from '../services/anonimous-customer.service';


const onTriggerCustomersCollection = async (): Promise<void> => {
  try {
    const changeStream = CustomerModel.watch();

    changeStream.on('change', async (change) => {
      if (change.operationType === 'insert' || change.operationType === 'update') {
        const documentId = change.documentKey._id as ObjectId;

        await generateCustomerAnomimously(documentId);
      }
    });

    console.log('>>> Change stream is active and listening for changes in the customers collection. <<<');
  } catch (error) {
    console.error('Error setting up change stream:', error);
  }
};

export default onTriggerCustomersCollection