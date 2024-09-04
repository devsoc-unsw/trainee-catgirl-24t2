import express, { type Request, type Response } from 'express';
import { requireToken } from '../middleware/token-middleware';
import { db } from '../db';
import {
  EXECUTIVE,
  involvements,
  PRESIDENT,
  societies,
} from '../model/society';
import { and, eq } from 'drizzle-orm';
import { BadRequestError } from '../error/bad-request-error';
import { requireSociety } from '../middleware/society-middleware';
import { ForbiddenError } from '../error/forbidden-error';

export const society = express.Router();
society.use(requireToken);

society.post('/', async (req: Request, res: Response) => {
  const { name, __user__ } = req.body;

  await db.insert(societies).values([{ name: name }]);
  const society = (
    await db.select().from(societies).where(eq(societies.name, name))
  )[0];
  await db
    .insert(involvements)
    .values([
      { societyId: society.id, userId: __user__.id, position: PRESIDENT },
    ]);

  res.status(200).json({ society });
});

society.get('/', async (req: Request, res: Response) => {
  const { __user__ } = req.body;
  const invs = await db
    .select()
    .from(involvements)
    .where(eq(involvements.userId, __user__.id));

  const socs = await Promise.all(
    invs.map(
      async (involvement) =>
        (
          await db
            .select()
            .from(societies)
            .where(eq(societies.id, involvement.societyId))
            .limit(1)
        )[0]
    )
  );

  res.status(200).json({ involvements: invs, societies: socs });
});

society.put('/', requireSociety, async (req: Request, res: Response) => {
  const { __user__, __society__ } = req.body;

  const query = await db
    .select()
    .from(involvements)
    .where(
      and(
        eq(involvements.societyId, __society__.id),
        eq(involvements.userId, __user__.id)
      )
    );
  if (query.length != 1) {
    throw new BadRequestError({ message: 'Not in society' });
  }
  const [involvement] = query;
  if (involvement.position < EXECUTIVE) {
    throw new ForbiddenError();
  }

  const { name } = req.body;
  await db
    .update(societies)
    .set({ name })
    .where(eq(societies.id, __society__.id));

  res.status(200).json({});
});

society.delete('/', requireSociety, async (req: Request, res: Response) => {
  const { __user__, __society__ } = req.body;

  const query = await db
    .select()
    .from(involvements)
    .where(
      and(
        eq(involvements.societyId, __society__.id),
        eq(involvements.userId, __user__.id)
      )
    )
    .limit(1);
  if (query.length != 1) {
    throw new BadRequestError({ message: 'Not in society' });
  }
  const [involvement] = query;
  if (involvement.position < EXECUTIVE) {
    throw new ForbiddenError();
  }

  await db.delete(societies).where(eq(societies.id, __society__.id));
  res.status(200).json({});
});
