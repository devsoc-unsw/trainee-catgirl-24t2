import express, { type Request, type Response } from 'express';
import { requireToken } from '../middleware/token-middleware';
import { requireForm, requireSociety } from '../middleware/society-middleware';
import { db } from '../db';
import { forms } from '../model/form';
import { eq } from 'drizzle-orm';

export const form = express.Router();
form.use(requireToken);
form.use(requireSociety);

form.post('/', requireSociety, async (req: Request, res: Response) => {
  const { __user__, __society__, title, fields } = req.body;
  await db.insert(forms).values([{ title, fields, societyId: __society__.id }]);
  res.status(200).json({});
});

form.get('/', requireSociety, async (req: Request, res: Response) => {
  const { __user__, __society__ } = req.body;
  res.status(200).json({
    forms: await db
      .select()
      .from(forms)
      .where(eq(forms.societyId, __society__.id)),
  });
});

form.put('/', requireForm, async (req: Request, res: Response) => {
  const { __user__, __form__, title, fields } = req.body;
  await db
    .update(forms)
    .set({ title, fields })
    .where(eq(forms.id, __form__.id));
  res.status(200).json({});
});

form.delete('/', requireForm, async (req: Request, res: Response) => {
  const { __user__, __form__ } = req.body;
  await db.delete(forms).where(eq(forms.id, __form__.id));
  res.status(200).json({});
});
