import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

connectDB();

app.get("/todos", (req, res) => {
  try {
    res.status(200).send({
      success: true,
      message: "fetch data successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Internal Server Error",
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port http:127.0.0.1${port}`);
});
