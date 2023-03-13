
import express from 'express';
import mongoose from 'mongoose';
import orderRouter from './routes/order';


const app = express();
const PORT = 5000;

const DB_URL = 'mongodb+srv://vovchanchyk:vovchanchyk@express-test.g7awg9b.mongodb.net/?retryWrites=true&w=majority';

app.use(express.json());


app.use('/api', orderRouter);


async function startApp() {
  try {
    await  mongoose.connect(DB_URL);
    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`)
    })
  } catch (error) {
    console.error(error);
  }
}

startApp();