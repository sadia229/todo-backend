import mongoose, { Schema } from "mongoose";

const todoSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  completed: { type: Boolean, default: false },
  priority: { type: String, enum: ["low", "medium", "high"], default: "low" },
});

// Define the Todo model
const Todo = mongoose.models.Todo || mongoose.model("Todo", todoSchema);

// Export the Todo model
export default Todo;
