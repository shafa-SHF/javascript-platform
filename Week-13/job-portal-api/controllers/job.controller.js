const jobs = [
  { id: 1, title: "Frontend Developer", company: "Google" },
  { id: 2, title: "Backend Developer", company: "Amazon" }
];

// PUBLIC
exports.listJobs = (req, res) => {
  res.json(jobs);
};

// AUTH REQUIRED
exports.jobDetail = (req, res) => {
  const job = jobs.find(j => j.id == req.params.id);
  res.json(job);
};

// ADMIN ONLY
exports.createJob = (req, res) => {
  jobs.push({ id: jobs.length + 1, ...req.body });
  res.json({ message: "Job created" });
};
