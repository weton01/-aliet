import express from 'express';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import { signupRouter } from './routes/signup';

const app = express();
app.set('trust proxy', true);
app.use(
    cookieSession({
      signed: false,
      secure: process.env.NODE_ENV !== 'test',
    })
  );
app.use(json());

app.use(signupRouter);

app.all('*', async (req, res) => {
    return res.status(404).send({msg: 'users route not found'})
})

export { app };