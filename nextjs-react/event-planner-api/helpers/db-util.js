import { MongoClient } from 'mongodb';

export const connectDB = async () => {
  const client = await MongoClient.connect(
    'mongodb+srv://christinayun:uhpVnMTDzQqLN1hN@cluster0.unwoh.mongodb.net/events?retryWrites=true&w=majority',
    { useUnifiedTopology: true }
  );
  return client;
};

export const insertDocument = async (client, collection, document) => {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);
  return result;
};

export const getAllDocuments = async (client, collection, sort) => {
  const db = client.db();
  const documents = await db.collection(collection).find().sort(sort).toArray();
  return documents;
};
