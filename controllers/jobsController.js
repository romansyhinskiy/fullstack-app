const createJob = async (req, res) => {
  res.send("createJob");
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
