import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connect from "./src/db/connect.js";
import cookieParser from "cookie-parser";
import tasksRoutes from './src/routes/tasksRoutes.js'
import userRoutes from './src/routes/userRoutes.js'
import errorHandler from "./src/helpers/errorHandler.js";

dotenv.config();

const port = process.env.PORT;

const app = express();

// middleware
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// error handler middleware
app.use(errorHandler);

//routes
app.use("/api/v1", tasksRoutes);
app.use("/api/v1", userRoutes);

const server = async () => {
  try {
    await connect();

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log("Failed to strt server.....", error.message);
    process.exit(1);
  }
};

server();