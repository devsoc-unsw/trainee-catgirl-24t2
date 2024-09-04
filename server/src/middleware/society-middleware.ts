import type { NextFunction, Request, Response } from 'express';
import { db } from '../db';
import { societies } from '../model/society';
import { eq } from 'drizzle-orm';
import { BadRequestError } from '../error/bad-request-error';
import { forms } from '../model/form';

export const requireSociety = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { societyId } = req.body;
  const query = await db
    .select()
    .from(societies)
    .where(eq(societies.id, societyId))
    .limit(1);

  if (query.length != 1) {
    throw new BadRequestError({ message: 'Society not found' });
  }

  req.body.__society__ = query[0];
  next();
};

export const requireSocietyPosition = (position: number) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const { __user__, __society__ } = req.body;
  };
};

export const requireForm = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { __user__, formId } = req.body;
  const query = await db
    .select()
    .from(forms)
    .where(eq(forms.id, formId))
    .limit(1);

  if (query.length != 1) {
    throw new BadRequestError({ message: 'No such form' });
  }

  req.body.__form__ = query[0];
  next();
};
