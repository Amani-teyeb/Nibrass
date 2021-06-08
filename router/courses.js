const express = require("express");
const router = express.Router();
const {createCourse, getCourses, getCourseById, removeCourse, editCourse} = require ('../controllers/course');
const { isAuth, adminMiddleware } = require("../middleware/isAuth");


router.post("/add", createCourse);
router.get("/get", getCourses);
router.get("/:id", getCourseById);
router.post("/:id", removeCourse);
router.put("/:id", editCourse)

  
module.exports = router;
