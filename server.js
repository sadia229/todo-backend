import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import Todo from "./models/todo.models.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

connectDB();

app.get("/todos", async (req, res) => {
  try {
    const result = await Todo.find();
    res.status(200).send({
      success: true,
      message: "fetch data successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Internal Server Error",
    });
  }
});

app.post("/create-todo", async (req, res) => {
  const todoDetails = req.body;
  try {
    const result = await Todo.create(todoDetails);
    res.status(201).send({
      success: true,
      message: "Todo created successfully",
      data: result,
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
