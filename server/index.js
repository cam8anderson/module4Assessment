const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, randomFortune } = require("./controller");

let data = [];

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", randomFortune);
app.post("/api/data", (req, res) => {
  const inputValue = req.body.data;
  console.log("Received POST request with data:", inputValue);
  data.push(inputValue);
  res.json({ message: "Data added successfully" });
});

app.delete("/api/data/:outputToDelete", (req, res) => {
  const outputToDelete = req.params.outputToDelete;
  console.log("Received DELETE request with data:", outputToDelete);
  data = data.filter((item) => item !== outputToDelete);
  res.json({ message: "Data deleted successfully" });
});

let currentRating = 3;

app.put("/api/rating", (req, res) => {
  const newRating = req.body.rating;
  if (newRating >= 1 && newRating <= 5) {
    currentRating = newRating;
    res.json({ message: "Rating updated successfully" });
  } else {
    res.status(400).json({ error: "Invalid rating value" });
  }
});

app.listen(4000, () => console.log("Server running on 4000"));
