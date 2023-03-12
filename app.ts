
import express from 'express';
import mongoose from 'mongoose';
import orderRouter from './routes/order';
import postRouter from './routes/post';
import postcardsRouter from './routes/post-cards';

const app = express();
const PORT = 5000;

const DB_URL = 'mongodb+srv://vovchanchyk:vovchanchyk@express-test.g7awg9b.mongodb.net/?retryWrites=true&w=majority';

app.use(express.json());

app.use('/api', postcardsRouter);
app.use('/api', orderRouter);


app.use('/api', postRouter);


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