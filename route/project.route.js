const express = require('express');
const Controller = require('../controller/project.controller');
const router = express.Router();

router.get('/', Controller.getProjects);
router.get('/:id', Controller.getProject);
router.post('/', Controller.saveProject);
router.put('/:id', Controller.updateProject);
router.delete('/:id', Controller.deleteProject);

module.exports = router;
