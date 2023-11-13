import dotenv from "dotenv";
import mariadb from "mariadb";
import { Pool } from "pg";
import 'dotenv/config';
import { Signale } from "signale";

dotenv.config();

const signale = new Signale();

export const pool = mariadb.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DB_DATABASE,
  password: process.env.PASSWORD,
  connectionLimit: 10,
});

async function query(sql: string, params: any[]) {
  let conn;
  try {
    conn = await pool.getConnection();
    signale.success("Conexión exitosa a la BD");
    const result = await conn.query(sql, params);
    return result;
  } catch (error) {
    signale.error(error);
    return null;
  } finally {
    if (conn) {
      conn.release(); // Devuelve la conexión al pool al finalizar
    }
  }
}





 


