const express = require("express");
const app = express();
const PORT = 3000;
app.get("/", (req, res) => {
  res.json({ message: `Hello from Dockerized Node.js API 🚀 ${PORT}` });
});


app.listen(PORT,"0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
