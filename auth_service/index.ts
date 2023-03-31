import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import schoolRouter from "./routes/schoolRoutes";
import associationRouter from "./routes/associationRoutes";
import userRouter from "./routes/userRoutes";
import cors from "cors";
import { checkIP } from "./utils/whiteIPs";
import { rateLimiter } from "./lib/rateLimiter";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(rateLimiter);
app.use(checkIP);
dotenv.config();
// app.use(upload.none())

const PORT = process.env.PORT || 1110;

async function main() {
  process.on("uncaughtException", (err) => {
    console.log(`Error: ${err}`);
    console.log(`Shutting down the server due to uncaught exceptions`);
    process.exit(1);
  });

  app.get("/", (_, res) => {
    res.send("School Talkz Auth Service");
  });

  app.use(schoolRouter);
  app.use(associationRouter);
  app.use(userRouter);

  const server = app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });

  process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err}`);
    console.log(`Shutting down the server due to unhandled promise rejection`);
    server.close(() => {
      process.exit(1);
    });
  });
}
main().catch((e) => {
  console.error(e.message);
});
