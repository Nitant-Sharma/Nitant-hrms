import pg from "pg";
const {Client} = pg;
import dotenv from "dotenv";
dotenv.config();


const pool = new Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password:
  String( process.env.PG_PASSWORD),
  port: process.env.PG_PORT
});
  pool.connect()
  .then(() => console.log("✅ Connected to PostgreSQL"))
  .catch((err) => console.error("❌ PostgreSQL connection error:", err));


  export default pool;