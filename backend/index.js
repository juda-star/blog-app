import express from "express";
import mongoose from "mongoose";
import router from "./routes/user";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();

// app.use(bodyParser.json({ limit: "30mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(express.json())
app.use("/api/user", router);

const PORT = 5000;

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
