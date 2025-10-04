import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("🚀 Boarding House Management Backend is Running!");
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
