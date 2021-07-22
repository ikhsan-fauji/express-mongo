const ProjectDao = require("../dao/project.dao");

const getProjects = () => {
  return ProjectDao.findAll();
}

const getProject = (id) => {
  return ProjectDao.findOne(id);
}

const saveProject = (data) => {
  if (!data) throw Error('data is not defined');
  return ProjectDao.save(data);
}

const updateProject = async (id, data) => {
  if (!id) throw Error('id is not defined');
  if (!data) throw Error('data is not defined');

  let payload = await getProject(id);
  if (payload === null) throw Error(`Data with id ${id} is not found`);

  payload = {
    ...payload,
    ...data
  };

  const update = await ProjectDao.update(payload);
  if (!update.ok) throw Error('Update failed');
  return getProject(id);
}

const deleteProject = (id) => {
  if (!id) throw Error('id is not defined');
  return ProjectDao.deleteOne(id);
}

module.exports = {
  getProjects,
  getProject,
  saveProject,
  updateProject,
  deleteProject
};
