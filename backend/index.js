import express from "express";
import mongoose from "mongoose";
import router from "./routes/user";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import blogRouter from "./routes/blog";
const app = express();
dotenv.config();
// app.use(bodyParser.json({ limit: "30mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);

const PORT = 8080;
console.log(process.env.CONNECTION_URL);
const CONNECTION_URL =
  "mongodb+srv://blog:blog123@cluster0.c44doqn.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(
        `database connected Server Running on Port: http://localhost:${PORT}`
      )
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set("strictQuery", false);
