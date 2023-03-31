import "reflect-metadata";
import express from "express";
import dotenv from "dotenv"
import { checkIP } from "./utils/whiteIPs";
import postAndCommentRouter from "./routes/postAndCommentsRoutes";
import cookieParser from "cookie-parser";

dotenv.config();
const PORT = Number(process.env.PORT) || 1234;
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(checkIP);
async function main() {
  process.on("uncaughtException", (err) => {
    console.log(`Error: ${err}`);
    console.log(`Shutting down the server due to uncaught exceptions`);
    process.exit(1);
  });

  app.get("/", (_, res) => {
    res.send("School Talkz Posts and Comments Service");
  });

  app.use("/api/v1", postAndCommentRouter)

  const server = app.listen(PORT, () => {
    console.log(`Running a backend at http://localhost:${PORT}/`);
  });

  process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err}`);
    console.log(`Shutting down the server due to unhandled promise rejection`);
    server.close(() => {
      process.exit(1);
    });
  });
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  