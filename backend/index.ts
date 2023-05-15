import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Client } from "pg";

dotenv.config();

const client = new Client({
  database: process.env.PGDATABASE,
  host: process.env.PGHOST,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT ? parseInt(process.env.PGPORT) : undefined,
  user: process.env.PGUSER,
});

client.connect();

const app: Application = express();

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(cors());

app.get(
  "/",
  async (request: Request, response: Response, next: NextFunction) => {
    const { rows } = await client.query("SELECT * FROM events");
    response.status(200).send(rows);
  }
);

app.listen(8080, () => {
  console.log("Redo på http://localhost:8080/");
});
