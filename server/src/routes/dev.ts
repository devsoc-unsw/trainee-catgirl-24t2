import express, { type Request, type Response } from 'express';
import { db } from '../db';
import { users } from '../model/user';
import { involvements, societies } from '../model/society';
import { autofills } from '../model/autofill';
import { forms, formSubmissions } from '../model/form';

export const dev = express.Router();

dev.post('/clear', async (req: Request, res: Response) => {
  await db.delete(users);
  await db.delete(societies);
  await db.delete(involvements);
  await db.delete(forms);
  await db.delete(formSubmissions);
  await db.delete(autofills);
  res.status(200).send('OK');
});
