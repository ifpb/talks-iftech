import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "musicfy",
  password: "konoha",
  port: 5432
});

export default pool;
