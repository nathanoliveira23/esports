import express, { Request, Response } from 'express';

const app = express();
app.use(express.json());

app.get('/games', (req, res) => {
  return res.json([]);
});

app.post('/ads', (req, res) => {
  return res.status(201).json([]);
});


app.get('/', (req: Request, res: Response) => {
  res.json();
});

app.listen(3333);