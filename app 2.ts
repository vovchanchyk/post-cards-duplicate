
import express from 'express';
import mongoose from 'mongoose';
import Post from './models/Post.js';
import router from './routes/post-cards.js';

const app = express();
const PORT = 5000;

const DB_URL = 'mongodb+srv://vovchanchyk:vovchanchyk@express-test.g7awg9b.mongodb.net/?retryWrites=true&w=majority';
app.use(express.json());

app.use('/post-cards', router);

app.get('/posts',  async (req, res) => {
  console.log(req.query);

  try {
    const posts = await Post.find();
    res.status(200).send(posts);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
 
})



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