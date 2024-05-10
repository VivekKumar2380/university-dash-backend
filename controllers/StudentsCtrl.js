// students controllers
import Student from "../model/Student.js";
import bcrypt from "bcrypt";
import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";

export const registerStudentCtrl = asyncHandler(async (req, res) => {
  const { name, email, password, dob, address, phone } = req.body;
  const studentExists = await Student.findOne({ email });
  if (studentExists) {
    throw new Error("Student already exists");
  }
  // hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // register a new student

  const student = await Student.create({
    name,
    email,
    password: hashedPassword,
    dob,
    address,
    phone,
  });
  res.status(201).json({
    status: "success",
    message: "Student registered successfully",
    data: student,
  });
});

export const loginStudentCtrl = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // find the student in  the db by email

  const studentFound = await Student.findOne({
    email,
  });

  if (
    studentFound &&
    (await bcrypt.compare(password, studentFound?.password))
  ) {
    res.json({
      status: "success",
      message: "Student Logged in successfully",
      studentFound,
      token: generateToken(studentFound?._id),
    });
  } else {
    throw new Error("Invalid Login credentials");
  }
});

export const getStudentProfileCtrl = asyncHandler(async (req, res) => {
  const student = await Student.findById(req.userAuthID);
  res.json({
    status: "success",
    message: "Student profile fetched successfully",
    student,
  });
});
