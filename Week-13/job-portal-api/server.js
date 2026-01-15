const express = require("express");
const cors = require("cors");

const app = express();   // ✅ THIS LINE IS VERY IMPORTANT
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Root API
app.get("/", (req, res) => {
  res.json({
    message: "Job Portal API is running",
    status: "OK"
  });
});

// Sample jobs API
app.get("/api/jobs", (req, res) => {
  res.json([
    { id: 1, title: "Frontend Developer", company: "Google" },
    { id: 2, title: "Backend Developer", company: "Amazon" }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
