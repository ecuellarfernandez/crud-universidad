import pkg from 'pg';
const { Pool } = pkg;

const connectionString = `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}`;

const pool = new Pool({
  connectionString: connectionString,
  allowExitOnIdle: true
});

export function query(text, params) { return pool.query(text, params); }
export function end() { return pool.end(); }