const jwt = require("jsonwebtoken");

exports.login = (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email required" });
  }

  if (!password) {
    return res.status(400).json({ message: "Password required" });
  }

  const token = jwt.sign(
    { email, role: "member" },
    "secretkey",
    { expiresIn: "1h" }
  );

  res.json({ token });
};

