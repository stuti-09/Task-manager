const express=require('express')
const router= express.Router();
const taskcontroller= require('../controllers/task')
router.route('/').get(taskcontroller.getAlltasks).post(taskcontroller.createTask)
router.route('/:id').get(taskcontroller.getTask).patch(taskcontroller.updateTask).delete(taskcontroller.deleteTask)
module.exports=router;