import assert from 'assert';
import dotenv from 'dotenv';

dotenv.config({ path: '../common/.env' });

assert(process.env.SECRET_KEY != undefined);
export const SECRET_KEY = process.env.SECRET_KEY;
