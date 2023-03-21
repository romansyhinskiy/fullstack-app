import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";
import Job from "../models/user.js";

const createJob = async (req, res) => {
  const { position, company } = req.body;
  if (!position || !company) {
    throw new BadRequestError("Please provide all values!");
  }

  req.body.createdBy = req.user.userId;

  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

const getAllJobs = async (req, res) => {
  res.send("getAllJobs");
};

const showStats = async (req, res) => {
  res.send("showStats");
};

const deleteJob = async (req, res) => {
  res.send("deleteJob");
};

const updateJob = async (req, res) => {
  res.send("updateJob");
};

export { createJob, deleteJob, getAllJobs, updateJob, showStats };
