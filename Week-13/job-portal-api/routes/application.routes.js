const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth.middleware");
const role = require("../middlewares/role.middleware");
const applicationController = require("../controllers/application.controller");

router.post("/apply/:jobId", auth, role("member"), applicationController.applyJob);

module.exports = router;
