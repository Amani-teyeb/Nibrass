
const Course = require('../models/Course');

exports.createCourse = async(req, res) => {
  try {

        const {url, titre, theme, level, image, description} = req.body;
   
        const course = new Course({
            url,
            titre,
            theme,
            level,
            image,
            description
        })
        const createdCourse = await course.save();
        res.status(200).send({ msg:`${createdCourse.titre} was created`, course: createdCourse});
  } catch (error) {
    console.log(error)
    res.status(500).send({ errors: [{ msg: "fail to create course" }] });
  }
};

exports.getCourses = async(req, res) => {
  try {

     const allCourses = await Course.find();
        res.status(200).send({ msg: "all courses", courses: allCourses});
  } catch (error) {
    res.status(500).send({ errors: [{ msg: "fail to create course"}] });
  }
};

exports.getCourseById = async (req, res) => {
  try {
      const { id } = req.params;
      const course = await Course.findById({ _id: id });
      res.status(200).send(course);
  } catch (error) {
      res.status(404).send({
          errors: [{ msg: "can't find course" }],
      });
  }
};
exports.editCourse = async (req, res) => {
  try {
      const course = await Course.findOneAndUpdate( { _id: req.params.id }, { $set: { ...req.body } },
          { new: true }
      );
      res.status(200).send({ msg: "Course updated", course});
  } catch (error) {
    res.status(500).send({
      errors: [{ msg: "can't update course" }],
  });
  }
};

exports.removeCourse = async (req, res) => {
  try {
      const { id } = req.params;
      const removeCourse = await Course.findById({ _id: id });
      if (removeCourse) {
          await removeCourse.remove();
          res.status(200).send({ msg: "Course deleted", removeCourse });
      }
  } catch (error) {
      res.status(500).send({
          errors: [{ msg: "can't delete Course" }],
      });
  }
};