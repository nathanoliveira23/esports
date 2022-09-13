import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.json({ message: "hello" });
});

app.listen(3333, () => "Server is running on PORT: 3333");