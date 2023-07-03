const PERFUME = require("../model/perfumeModel.js");

const create_perfume = async (req, res) => {
  const Task = new PERFUME({
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
    price: req.body.price,
    category: req.body.category,
  });
  try {
    const savedTask = await Task.save();
    res.status(200).json(savedTask);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

const get_all_perfume = async (req, res) => {
  const getAllperfume = await PERFUME.find();
  try {
    res.json(getAllperfume);
    console.log(getAllperfume);
  } catch {
    res.status(404).json({ message: err });
  }
};
const update_perfume = async (req, res) => {
  try {
    const updatePerfume = await PERFUME.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title, description: req.body.description } }
    );
    res.json(updatePerfume);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

const delete_perfume = async (req, res) => {
  try {
    const deletePerfume = await PERFUME.findByIdAndDelete({
      _id: req.params.postId,
    });
    res.json(deletePerfume);
    console.log(deletePerfume);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

module.exports = {
  create_perfume,
  get_all_perfume,
  update_perfume,
  delete_perfume,
};
