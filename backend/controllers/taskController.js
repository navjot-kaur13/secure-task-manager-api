import Task from "../models/Task.js";

/* =========================
   CREATE TASK
========================= */
export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;

    const task = await Task.create({
      title,
      description,
      user: req.user._id
    });

    res.status(201).json({
      message: "Task created successfully",
      task
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

/* =========================
   GET ALL TASKS
========================= */
export const getTasks = async (req, res) => {
  try {

    const tasks = await Task.find({ user: req.user._id });

    res.status(200).json(tasks);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

/* =========================
   DELETE TASK
========================= */
export const deleteTask = async (req, res) => {
  try {

    await Task.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Task deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

/* =========================
   UPDATE TASK
========================= */
export const updateTask = async (req, res) => {
  try {

    const { title, description } = req.body;

    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { title, description },
      { new: true }
    );

    res.status(200).json({
      message: "Task updated successfully",
      task
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};