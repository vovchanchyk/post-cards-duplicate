import express from 'express';
import PostCard from '../models/PostCard';

const postcardsRouter = express.Router();

postcardsRouter.get('/post-cards');
postcardsRouter.get('/post-cards/:id');

postcardsRouter.post('/post-cards',(req, res) => {
    try {
      const {author,title,content} = req.body;
  
      PostCard.create({author,title,content});
  
      res.status(200).send({author,title,content});
    } catch (error) {
  
      console.error(error);
      res.status(500).send(error);
    }
});

postcardsRouter.delete('/post-cards/:id');

export default postcardsRouter;


