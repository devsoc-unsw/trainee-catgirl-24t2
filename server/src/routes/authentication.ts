import express, { type Request, type Response } from 'express';
import { db } from '../db';
import { users } from '../model/user';
import { eq } from 'drizzle-orm';
import { BadRequestError } from '../error/bad-request-error';
import { compare, hash } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { SECRET_KEY } from '../env';

export const authentication = express.Router();

authentication.post('/', async (req: Request, res: Response) => {
  let { email, password } = req.body;
  email = (email as string).toLocaleLowerCase();
  const query = await db.select().from(users).where(eq(users.email, email));

  if (query.length != 0) {
    throw new BadRequestError({ message: 'Email already in use' });
  }

  password = await hash(password, 5);
  await db.insert(users).values([{ email, password, age: 0, name: '' }]);
  res.status(200).send('Successfully created a new user');
});

authentication.put('/', async (req: Request, res: Response) => {
  let { email, password } = req.body;
  email = (email as string).toLocaleLowerCase();
  const query = await db.select().from(users).where(eq(users.email, email));

  if (query.length == 0 || !(await compare(password, query[0].password))) {
    throw new BadRequestError({ message: 'Invalid email or password' });
  }

  const token = sign({ id: query[0].id.toString(), email }, SECRET_KEY, {
    expiresIn: '24 hours',
  });

  res.status(200).json({ token });
});
