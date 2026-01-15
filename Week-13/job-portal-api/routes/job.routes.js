const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth.middleware");
const role = require("../middlewares/role.middleware");
const jobController = require("../controllers/job.controller");

// PUBLIC
router.get("/", jobController.listJobs);

// AUTH
router.get("/:id", auth, jobController.jobDetail);

// ADMIN
router.post("/", auth, role("admin"), jobController.createJob);

module.exports = router;
