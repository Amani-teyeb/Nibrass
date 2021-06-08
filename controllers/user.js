const User = require("../models/User");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");


exports.Register = async (req, res) => {
  console.log(req.body)
    try {
      // req.body= Firstname , Lastname, email , password , phone
      const { email, password } = req.body;
      // test email
      const findUser = await User.findOne({ email });
      // email should be unique
      if (findUser) {
        return res
          .status(400)
          .send({ errors: [{ msg: "email should be unique" }] });
      }
      // new user
      const newUser = new User({ ...req.body });
      // hachage de passeword 
      const hashedpassword = await bcrypt.hash(password, saltRounds);
      newUser.password = hashedpassword;
      //then we save user
      await newUser.save();
      // create token
      // CRRE UN TOKEN= meftaa7
    const token = jwt.sign(
      {
        id: newUser._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: "24h" }
    );
      res.status(200).send({ msg: "register succ", user: newUser, token});
  } catch (error) {
    console.log(error);
    res.status(500).send({ errors: [{ msg: "user not saved" }] });
  }
};

exports.login= async(req,res)=>{
  try {
    //email & password
   const {email, password}= req.body;
   // find user
   const findUser = await User.findOne({email});
   // if user not exist
   if (!findUser){
      return res.status(400).send({errors:[{msg:"bad credential"}]})
   } 
   // else verify password
  const comparePass = await bcrypt.compare(password, findUser.password);
  if (!comparePass){
    return res.status(400).send({errors:[{msg:"bad credential"}]})
  }
  // create token 
  const token = jwt.sign(
    {
      id: findUser._id,
      // Firstname wel email
      role : findUser.role
    },
    process.env.SECRET_KEY,
    { expiresIn: "3h" }
  );
  res.status(200).send({msg:"login succ", user: findUser, token})
  } catch (error) {
    res.status(500).send({errors:[{msg:"Something went wrong"}]})
    console.log(error)
  }
};

exports.updateUser = async (req, res) => {
  try {
      const user = await User.findOneAndUpdate(
          { _id: req.params.id },
          { $set: { ...req.body } },
          { new: true }
      );

      res.status(200).send({ msg: "user updated", user });
  } catch (error) {
      res.status(500).send({ msg: error });
  }
};

exports.addfavorite = async (req, res) => {
  try {
      const newfav = req.body.newfav;
      const user = await User.findOne({ _id: req.params.id });
      if (user) {
          const favExist = user.favorites.find(
              (e) => e._id === newfav._id
          );
          if (favExist) {
              res.status(401).send({ msg: "course already added to your library" });
          }
          let x = [...user.favorites, newfav];
          await User.findByIdAndUpdate({ _id: req.params.id }, { favorites: x });
          res.status(200).send({ msg: "course added to library" });
      }
  } catch (error) {
      res.status(500).send({ msg: "fail to add course to your library" });
  }
};

exports.removefavorite = async (req, res) => {
  try {
      const courseRemove = req.body.courseRemove;
      const user = await User.findOne({ _id: req.params.id });
      const x = user.favorites;
      const y = x.filter((el) => el._id !== courseRemove._id);
      await User.findByIdAndUpdate({ _id: req.params.id }, { favorites: y });
      res.status(200).send({ msg: "course removed from library" });
  } catch (error) {
      res.status(500).send({ msg: "fail to remove course from library" });
  }
};
