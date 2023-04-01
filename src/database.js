import { createPool } from "mysql2/promise";
import {DB_DATABASE,DB_HOST,DB_PORT,DB_USER,DB_PASSWORD,PORT} from'./config.js'

export const pools = createPool({
    host : DB_HOST,
    database : DB_DATABASE,
    user : DB_USER,
    password : DB_PASSWORD,
    port: DB_PORT
});

