import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";

const app: Application = express();

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(cors());

app.get(
  "/",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(200).send("Välkommen till vårt backend!");
  }
);

app.listen(8080, () => {
  console.log("Redo på http://localhost:8080/");
});
