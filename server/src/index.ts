import express, { type Request, type Response } from 'express';

const app = express();
const port = 3000;

app.get('/', async (req: Request, res: Response) => {
  res.send('Hello, Bun!');
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
