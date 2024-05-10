import express from "express";
import {
  addMarksCtrl,
  addStreamToStudentCtrl,
  createStreamCtrl,
  createSubjectCtrl,
  deleteMarksCtrl,
  deleteSteamCtrl,
  deleteSubjectCtrl,
  getAllStudentCtrl,
  getStreamsCtrl,
  getSubjectCtrl,
  showSubjectsAndMarksCtrl,
  updateMarksCtrl,
  updateSteamCtrl,
  updateSubjectCtrl,
} from "../controllers/adminCtrl.js";

const adminRoutes = express.Router();

// student routes
adminRoutes.get("/allstudents", getAllStudentCtrl);
adminRoutes.put("/updatestream", addStreamToStudentCtrl);
adminRoutes.get("/updatedmarks/:id/", showSubjectsAndMarksCtrl);
//Stream handling routes
adminRoutes.post("/stream", createStreamCtrl);
adminRoutes.put("/stream/:id", updateSteamCtrl);
adminRoutes.get("/stream", getStreamsCtrl);
adminRoutes.delete("/stream/:id/delete", deleteSteamCtrl);

// subject handling routes
adminRoutes.post("/subject", createSubjectCtrl);
adminRoutes.put("/subject/:id", updateSubjectCtrl);
adminRoutes.get("/subject", getSubjectCtrl);
adminRoutes.delete("/subject/:id/delete", deleteSubjectCtrl);

// marks handling routes

adminRoutes.post("/mark", addMarksCtrl);
adminRoutes.put("/mark/:id", updateMarksCtrl);
adminRoutes.delete("/mark/:id/delete", deleteMarksCtrl);

export default adminRoutes;
