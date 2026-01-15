exports.applyJob = (req, res) => {
  res.json({
    message: `User ${req.user.id} applied for job ${req.params.jobId}`
  });
};
