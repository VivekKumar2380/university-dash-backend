import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import dbConnect from "../config/dbConnect.js";
import { globalErrHandler, notFound } from "../middlewares/globalErrHandler.js";
import studentRoutes from "../routes/studentsRoute.js";
import adminRoutes from "../routes/adminRoute.js";
dotenv.config();
dbConnect();
const app = express();
//cors
app.use(cors());
app.use(express.json());
//url encoded
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/users", studentRoutes);
app.use("/api/v1/admin", adminRoutes);
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.use(notFound);
app.use(globalErrHandler);
export default app;
