import express from 'express';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import 'express-async-errors';

const app = express();

app.set('trust proxy', true);
app.use(json());

app.use(
    cookieSession({
      signed: false,
      secure: true,
    })
  );


app.all('*', async (req, res) => {
    return res.status(404).send({msg: 'users route not found'})
})

export { app };