import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
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

const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(path.resolve(), "public")));
app.use("/images", express.static(path.join(__dirname, "publicimages")));

app.use(express.json());

app.use(cors());

app.get(
  "/events",
  async (request: Request, response: Response, next: NextFunction) => {
    const { rows } = await client.query("SELECT * FROM events");
    response.status(200).send(rows);
  }
);

app.get(
  "/events/:eventId",
  async (request: Request, response: Response, next: NextFunction) => {
    const { rows } = await client.query(
      "SELECT * FROM events WHERE id_name = $1",
      [request.params.eventId]
    );

    if (rows.length === 0) {
      response.status(404).end();
    } else {
      const event = rows[0];
      response.status(200).send(event);
    }
  }
);

app.listen(port, () => {
  console.log("Redo på" + port);
});

// app.listen(8080, () => {
//   console.log("Redo på http://localhost:8080/");
// });

// FRÅGOR TILL VANJA:
// -Hur ska bilder läggas in om public-mappen tas bort vid kommandot i terminalen?
