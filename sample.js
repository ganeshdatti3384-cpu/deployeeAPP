const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Sample hardcoded user
const USER = {
  username: "admin",
  password: "12345"
};

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === USER.username && password === USER.password) {
    res.json({ message: "Login successful ✅" });
  } else {
    res.status(401).json({ message: "Invalid username or password ❌" });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
