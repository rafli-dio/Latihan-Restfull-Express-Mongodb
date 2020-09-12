const Model = require("./../model/todoModel");

// post data
exports.createTodo = async (req, res) => {
  try {
    const { todo, status } = req.body;

    const newTodo = new Model({
      todo,
      status,
    });
    const saveTodo = await newTodo.save();
    res.status(200).json({
      status: "succes",
      message: "data has been added succesfully",
      result: saveTodo,
    });
  } catch (err) {
    console.log(err);
  }
};

// get all data
exports.getAllTodo = async (req, res) => {
  try {
    const getTodo = await Model.find();
    res.status(200).json({
      status: "succes",
      message: "oke oke",
      result: getTodo,
    });
  } catch (err) {
    console.log(err);
  }
};

// get data by id
exports.todoId = async (req, res) => {
  try {
    const idTodo = await Model.findById(req.params.id);
    res.status(200).json({
      status: "succes",
      result: idTodo,
    });
  } catch (err) {
    console.log(err);
  }
};

// update data
exports.updateTodo = async (req, res) => {
  await Model.findByIdAndUpdate(req.params.id, req.body, (err, result) => {
    if (err) {
      return res.status(442).json({ status: "error", message: err.message });
    }
    res.status(200).json({
      status: "succes",
      message: "data has been update successfully",
      result: result,
    });
  });
};

// delete data
exports.deleteTodo = async (req, res) => {
  await Model.findByIdAndDelete(req.params.id, (err, result) => {
    if (err) {
      return res.status(442).json({ status: "error", message: err.message });
    }
    res.status(200).json({
      status: "succes",
      message: "data has been deleted succesfully",
    });
  });
};
