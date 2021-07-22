const ProjectService = require('../service/project.service');

const getProjects = async (req, res) => {
  try {
    const projects = await ProjectService.getProjects();
    res.json({ projects });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const getProject = async (req, res) => {
  try {
    const { params: { id } } = req;
    const project = await ProjectService.getProject(id);
    res.json({ project });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const saveProject = async (req, res) => {
  try {
    const { body } = req;
    const project = await ProjectService.saveProject(body);
    res.json({ project });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


const updateProject = async (req, res) => {
  try {
    const { body, params: { id } } = req;
    const project = await ProjectService.updateProject(id, body);
    res.json({ project });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const deleteProject = async (req, res) => {
  try {
    const { params: { id } } = req;
    const project = await ProjectService.deleteProject(id);
    res.json({ project });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  getProjects,
  getProject,
  saveProject,
  updateProject,
  deleteProject
};
