import dotenv from 'dotenv';
dotenv.config();

export const PGUSER = process.env.PGUSER;
export const PGPASSWORD = process.env.PGPASSWORD;
export const PGHOST = process.env.PGHOST;
export const PGPORT = process.env.PGPORT;
export const PGDATABASE = process.env.PGDATABASE;