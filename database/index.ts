import "reflect-metadata";
import { PrismaClient } from "@prisma/client";
import express from "express";
import { checkIP } from "./utils/whiteIPs";
import schoolRouter from "./routes/schoolRoutes";
import associationRoutes from "./routes/associationRoutes";
import userRouter from "./routes/userRoutes"
import postsAndCommentsRouter from "./routes/postsAndCommentsRoutes"
import dotenv from "dotenv"

dotenv.config();
const prisma = new PrismaClient();
const PORT = Number(process.env.PORT) || 4000;
const app = express();
app.use(express.json());
app.use(checkIP);
async function main() {
  process.on("uncaughtException", (err) => {
    console.log(`Error: ${err}`);
    console.log(`Shutting down the server due to uncaught exceptions`);
    process.exit(1);
  });

  app.get("/", (_, res) => {
    res.send("School Talkz Database Service");
  });

  app.use("/api/v1", schoolRouter);
  app.use("/api/v1", associationRoutes);
  app.use("/api/v1", userRouter)
  app.use("/api/v1", postsAndCommentsRouter)

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
  .finally(async () => {
    await prisma.$disconnect();
  });
