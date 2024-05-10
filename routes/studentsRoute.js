import express from "express";
import {
  getStudentProfileCtrl,
  loginStudentCtrl,
  registerStudentCtrl,
} from "../controllers/StudentsCtrl.js";
import { isLoggedIn } from "../middlewares/isLoggedIn.js";

const studentRoutes = express.Router();

studentRoutes.post("/register", registerStudentCtrl);
studentRoutes.post("/login", loginStudentCtrl);
studentRoutes.get("/profile", isLoggedIn, getStudentProfileCtrl);

export default studentRoutes;
