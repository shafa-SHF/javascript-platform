const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.middleware");

const vacancies = [
  { id: 1, title: "Frontend Developer", company: "Google" },
  { id: 2, title: "Backend Developer", company: "Amazon" }
];

router.get("/", auth, (req, res) => {
  res.json(vacancies);
});

module.exports = router;
