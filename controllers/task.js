const Task = require('../models/task')
exports.getAlltasks=async (req,res)=>{
    try{
        const tasks = await Task.find({})
        res.status(200).json({tasks})

    }catch(error){
        res.status(500).json({msg:error})
    }
    
}
exports.createTask= async (req,res)=>{
    try{
        const task = await Task.create(req.body)
        res.status(201).json({task})

    }catch(error){
        res.status(500).json({msg:error})

    }
    
}
exports.getTask=async (req,res)=>{
    try{
        const taskId=req.params.id
        const task= await Task.findById(taskId)
        if(!task){
            return res.status(404).json({msg:`no task with id: ${taskId}`})
        }
        res.status(200).json({task})

    }catch(error){
        res.status(500).json({msg:error})

    }
    
}
exports.updateTask=async (req,res)=>{
    try{
        const taskId=req.params.id
        const task= await Task.findByIdAndUpdate(taskId,req.body,{
            new:true,
            runValidators:true
        })
        if(!task){
            return res.status(404).json({msg:`no task with id: ${taskId}`})
        }
    }catch(error){
        res.status(500).json({msg:error})

    }
}
exports.deleteTask= async (req,res)=>{
    try{
        const taskId=req.params.id
        const task= await Task.findByIdAndRemove(taskId)
        if(!task){
            return res.status(404).json({msg:`no task with id: ${taskId}`})
        }
        res.status(200).json({task})

    }catch(error){
        res.status(500).json({msg:error})

    }
}