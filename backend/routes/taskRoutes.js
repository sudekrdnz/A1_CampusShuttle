const express = require('express');
const { getTasks, addTask, updateTask, deleteTask } = require('../controllers/taskController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/tasks', protect, getTasks);
router.post('/tasks', protect, addTask);
router.put('/tasks', protect, updateTask);
router.delete('/tasks', protect, deleteTask)

module.exports = router;