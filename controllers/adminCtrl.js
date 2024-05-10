// admin controller
import asyncHandler from "express-async-handler";
import Stream from "../model/Stream.js";
import Student from "../model/Student.js";
import Subject from "../model/Subject.js";
import Mark from "../model/Mark.js";

export const getAllStudentCtrl = asyncHandler(async (req, res) => {
  const students = await Student.find();
  res.status(201).json({
    status: "success",
    message: "Students feched successfully",
    students,
  });
});
export const addStreamToStudentCtrl = asyncHandler(async (req, res) => {
  const { studentId, streamId } = req.body;

  // Find the student by ID
  const student = await Student.findById(studentId);

  if (!student) {
    return res.status(404).json({
      status: "error",
      message: "Student not found",
    });
  }

  // Update student's stream
  student.stream = streamId;
  await student.save();

  res.json({
    status: "success",
    message: "Stream added to student profile successfully",
    student,
  });
});

// Show Subjects and Marks for Student Controller
export const showSubjectsAndMarksCtrl = asyncHandler(async (req, res) => {
  const { studentId } = req.params;

  // Find the student by ID
  const student = await Student.findById(studentId).populate({
    path: "stream",
    populate: {
      path: "subjects",
      model: "Subject",
    },
  }).populate({
    path: "marks",
    model: "Mark",
    populate: {
      path: "subject",
      model: "Subject",
    },
  });

  if (!student) {
    return res.status(404).json({
      status: "error",
      message: "Student not found",
    });
  }

  res.json({
    status: "success",
    message: "Student subjects and marks fetched successfully",
    student,
  });
});


export const createStreamCtrl = asyncHandler(async (req, res) => {
  const { name } = req.body;
  const streamExists = await Stream.findOne({ name });
  if (streamExists) {
    throw new Error(`Stream ${name} already exists`);
  }
  // create a new stream'

  const stream = await Stream.create({ name });
  res.status(201).json({
    status: "success",
    message: "stream created successfully",
    stream,
  });
});
export const getStreamsCtrl = asyncHandler(async (req, res) => {
  let streams = await Stream.find();
  res.json({
    status: "success",
    message: "Streams fetched successfully",
    streams,
  });
});
export const updateSteamCtrl = asyncHandler(async (req, res) => {
  const { name } = req.body;

  // update

  const stream = await Stream.findByIdAndUpdate(
    req.params.id,
    { name },
    { new: true, runValidators: true }
  );
  res.json({
    status: "success",
    message: "Stream updated successfully",
    stream,
  });
});
export const deleteSteamCtrl = asyncHandler(async (req, res) => {
  // delete
  await Stream.findByIdAndDelete(req.params.id);
  res.json({
    status: "success",
    message: "Stream deleted successfully",
  });
});

// subject
export const createSubjectCtrl = asyncHandler(async (req, res) => {
  const { name } = req.body;
  const subjectExists = await Subject.findOne({ name });
  if (subjectExists) {
    throw new Error(`Subject ${name} already exists`);
  }
  // create a new stream'

  const subject = await Subject.create({ name });
  res.status(201).json({
    status: "success",
    message: "Subject created successfully",
    subject,
  });
});
export const getSubjectCtrl = asyncHandler(async (req, res) => {
  let subject = await Subject.find();
  res.json({
    status: "success",
    message: "Subject fetched successfully",
    subject,
  });
});
export const updateSubjectCtrl = asyncHandler(async (req, res) => {
  const { name } = req.body;

  // update

  const subject = await Subject.findByIdAndUpdate(
    req.params.id,
    { name },
    { new: true, runValidators: true }
  );
  res.json({
    status: "success",
    message: "Subject updated successfully",
    subject,
  });
});
export const deleteSubjectCtrl = asyncHandler(async (req, res) => {
  // delete
  await Subject.findByIdAndDelete(req.params.id);
  res.json({
    status: "success",
    message: "Subject deleted successfully",
  });
});


// Marks 
export const addMarksCtrl = asyncHandler(async (req, res) => {
    const { studentId, streamId, subjectId, marks } = req.body;
    const mark = await Mark.create({
      student: studentId,
      stream: streamId,
      subject: subjectId,
      marks,
    });
    res.status(201).json({
      status: "success",
      message: "Marks added successfully",
      mark,
    });
  });
  
  // Update marks for a particular subject
  export const updateMarksCtrl = asyncHandler(async (req, res) => {
    const { marks } = req.body;
    const mark = await Mark.findByIdAndUpdate(
      req.params.id,
      { marks },
      { new: true, runValidators: true }
    );
    res.json({
      status: "success",
      message: "Marks updated successfully",
      mark,
    });
  });
  
  // Delete marks for a particular subject
  export const deleteMarksCtrl = asyncHandler(async (req, res) => {
    await Mark.findByIdAndDelete(req.params.id);
    res.json({
      status: "success",
      message: "Marks deleted successfully",
    });
  });