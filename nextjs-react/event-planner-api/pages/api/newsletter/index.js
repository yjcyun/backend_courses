import { connectDB, insertDocument } from '../../../helpers/db-util';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const email = req.body.email;
    if (!email || !email.includes('@')) {
      res.status(422).json({ message: 'Invalid email address' });
    }

    let client;

    try {
      client = await connectDB();
    } catch (error) {
      res.status(500).json({ message: 'DB connection failed' });
      return;
    }

    try {
      await insertDocument(client, 'newsletter', { email: email });
      client.close();
    } catch (error) {
      res.status(500).json({ message: 'Data insert failed' });
      return;
    }

    res.status(201).json({ message: 'Success' });
  }
};

export default handler;
