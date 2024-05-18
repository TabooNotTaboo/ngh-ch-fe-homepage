import express from "express";
import usersRouter from "./routers/users.routes";
import databaseService from "~/services/database.services";
import { defaultErrorHandler } from "./middlewares/errors.middlewares";

const app = express();
const port = 8080;
databaseService.connect();

app.use(express.json());

app.use("/users", usersRouter);

app.use(defaultErrorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
