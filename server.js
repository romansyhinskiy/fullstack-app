import "express-async-errors";
import express from "express";
const app = express();

import dotenv from "dotenv";
dotenv.config();

import morgan from "morgan";
// connection to db
import connectDb from "./db/connect.js";
// routes
import authRouter from "./routes/authRoutes.js";
import jobsRouter from "./routes/jobsRoutes.js";

// middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import authenticateUser from "./middleware/auth.js";

const port = process.env.PORT || 5000;

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.get("/api/v1", (req, res) => {
  res.json({ msg: "Hello" });
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", authenticateUser, jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = () => {
  try {
    connectDb(process.env.MONGO_URL);
    app.listen(port, (req, res) => {
      console.log(`app is running on port ${port}`);
    });
  } catch (error) {
    console.log(err);
  }
};

start();
