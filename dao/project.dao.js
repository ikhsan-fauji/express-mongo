const Project = require('../model/project.model');

const findAll = () => {
  return Project.find();
}

const findOne = (id) => {
  return Project.findOne({ _id: id });
}

const save = (data) => {
  return Project.create(data);
}

const update = (data) => {
  return Project.updateOne(data);
}

const deleteOne = (id) => {
  return Project.deleteOne({ _id: id });
}

module.exports = {
  findAll,
  findOne,
  save,
  update,
  deleteOne
};
