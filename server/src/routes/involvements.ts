import express, { type Request, type Response } from 'express';
import { requireToken } from '../middleware/token-middleware';
import { requireSociety } from '../middleware/society-middleware';
import { db } from '../db';
import { involvements } from '../model/society';
import { and, eq } from 'drizzle-orm';

export const involvement = express.Router();
involvement.use(requireToken);

involvement.get('/', async (req: Request, res: Response) => {
  const { __user__ } = req.body;
  res
    .status(200)
    .json(
      await db
        .select()
        .from(involvements)
        .where(eq(involvements.userId, __user__.id))
    );
});

involvement.post('/', requireSociety, async (req: Request, res: Response) => {
  const { __user__, __society__, position } = req.body;
  await db.insert(involvements).values([
    {
      societyId: __society__.societyId,
      userId: __user__.id,
      position: position,
    },
  ]);
});

involvement.put('/', async (req: Request, res: Response) => {
  const { __user__, __society__, position } = req.body;
  await db
    .update(involvements)
    .set({ position })
    .where(
      and(
        eq(involvements.userId, __user__.id),
        eq(involvements.societyId, __society__.id)
      )
    );
  res.status(200).json({});
});

involvement.delete('/', async (req: Request, res: Response) => {
  const { __user__, __society__ } = req.body;
  await db
    .delete(involvements)
    .where(
      and(
        eq(involvements.userId, __user__.id),
        eq(involvements.societyId, __society__.id)
      )
    );
  res.status(200).json({});
});
