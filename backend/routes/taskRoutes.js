const express = require('express');
const { updateUserProfile, getProfile } = require('../controllers/taskController');
const router = express.Router();

router.get('/tasks', getTasks);
router.post('/tasks', addTask);
router.put('/tasks', updateTask);
router.delete('/tasks', deleteTask)

module.exports = router;