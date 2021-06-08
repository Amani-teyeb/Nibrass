const express = require("express");
const { isAuth } = require("../middleware/isAuth");
// const { Register, login } = require("../controllers/user");
// const { validation, registerValidate, loginValidate } = require("../middleware/validateUser");
// const {isAuth, adminMiddleware} = require("../middleware/isAuth");
const Task = require("../models/Todo");

const router = express.Router();

router.post("/add", isAuth, async(req,res)=>{
    
    try {
        const {task}= req.body;
        const newTask= new Task({task:task, user_id : req.user._id});
        await newTask.save();
        res.status(200).send({ msg: "task added successfully",  newTask});
        } catch (error) {
            console.log(error);
        res.status(500).send({ errors: [{ msg: "can't add task" }] });
            
        }

});

router.get("/get",isAuth ,async(req,res)=>{
    const id=req.user._id
    try {
        const Tasks =await Task.find({user_id : req.user._id})
        res.status(200).send({msg:"all Tasks", Tasks})
    } catch (error) {
        res.status(500).send({ errors: [{ msg: "can't get tasks" }] })
    }
    
});


router.put("/:Id", async(req,res)=>{
  try {
     const {Id}=req.params
     
     const task=await Task.findOneAndUpdate({_id:Id},{$set:{...req.body}})
     res.status(200).send({msg:"task edited", task})
  } catch (error) {
     res.status(500).send({ errors: [{ msg: "can't Edit task" }] })
  }
 })


 router.delete('/:Id', async(req,res)=>{
  try {
      const {Id}=req.params
      const task=await Task.findByIdAndDelete(Id)
      res.status(200).send({msg:"task deleted", task})
  } catch (error) {
      res.status(500).send({ errors: [{ msg: "can't delete task" }] })
  }
})




  
module.exports = router;