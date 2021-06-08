//importer express pour creer les routes
const express = require("express");
const { findByIdAndDelete } = require('../models/User')
const { Register, login, updateUser, addfavorite, removefavorite} = require("../controllers/user");
const { validation, registerValidate, loginValidate } = require("../middleware/validateUser");
const {isAuth, adminMiddleware} = require("../middleware/isAuth");
const User = require("../models/User");

//const { Register } = require("../controllers/user.controllers");
const router = express.Router();

/*router.get("/", (req,res) =>{
    res.send("testing router");
});*/

/*sign in
@ meth : post
@ path: http: localhost:5000/api/user/register
@ params : body
@ public
*/
router.post("/register", registerValidate() ,validation ,Register);
/*login
@ meth : post
@ path: http: localhost:5000/api/user/login
@ params : body
@ public
*/
router.post("/login",loginValidate() ,validation ,login);
router.put("/:id" ,updateUser);


/*
@method: GET
@ path:http:localhost:5000/api/user/current
@ parameter: req.headers  
public
*/
router.get("/current", isAuth, (req, res) => {
    res.send({ msg: "authorized", user: req.user });
  });

//@desc all users
//@method get

router.get('/allusers', async(req,res)=>{
    try {
        const users =await User.find()
        res.status(200).send({msg:"all users", users})
    } catch (error) {
        res.status(500).send("impossible to get users")
    }
});


 router.delete('/:Id', async(req,res)=>{
  try {
      const {Id}=req.params
      const user=await User.findByIdAndDelete(Id)
      res.status(200).send({msg:"user deleted", user})
  } catch (error) {
      res.status(500).send("impossible to delet user")
  }
})


router.post("/favorites/:id", addfavorite);
router.delete("/favorites/:id", removefavorite);




  
module.exports = router;