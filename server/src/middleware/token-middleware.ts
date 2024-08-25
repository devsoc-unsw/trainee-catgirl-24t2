import { verify, type JwtPayload } from 'jsonwebtoken';
import type { NextFunction, Request, Response } from 'express';
import { SECRET_KEY } from '../env';
import { db } from '../db';
import { users } from '../model/user';
import { eq } from 'drizzle-orm';

export async function requireToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).send('Please provide token');
  }

  try {
    const decoded = verify(token, SECRET_KEY);
    const id: number = (decoded as JwtPayload).id;
    const matches = await db.select().from(users).where(eq(users.id, id));
    if (matches.length == 0) {
      return res.status(403).send('Bad token');
    }

    req.id = id;
    next();
  } catch (erorr) {
    res.status(403).send('Bad token');
  }
}
