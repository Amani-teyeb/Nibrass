  
import React, { useEffect } from "react";
import './App.css';
import {Route, Switch } from "react-router-dom";
import { useDispatch} from "react-redux";
import Login from "./Components/Login/Login";
import Logint from "./Components/Login/Logint";
import Signup from "./Components/Signup/Signup";
import Signupt from "./Components/Signup/Signupt";
import Intro from './Pages/Intro';
import UserDashboard from './Pages/User/UserDashboard';
// import Home from './Pages/Home'
import Allusers from './Components/Allusers/Allusers';
import Course from './Components/Course/Course';
import CoursePage from './Components/Course/CoursePage';
import { current } from "./Redux/actions/user";

import Home from './Pages/Admin/Home'
import AddCourse from './Components/Course/Addcourse';
import Favorite from './Components/Favorite/Favorite'

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(current());
  }, []);
  return (
    <div className="App">

    <Switch>
      <Route exact path="/"  component={Intro}/> 
      {/* <Route exact path="/home"  component={Home}/> */}
      <Route  path="/login"  component={Login}/>
      <Route  path="/signup"  component={Signup}/>
      <Route  path="/logint"  component={Logint}/>
      <Route  path="/signupt"  component={Signupt}/>
      <Route  path="/user/dashboard"  component={UserDashboard}/>
      <Route path="/allusers" component={Allusers} />
      <Route path="/adminhome" component={Home} />
      <Route exact path="/courses" component={CoursePage} />
      <Route path="/addcourse" component={AddCourse} />

      <Route path="/courses/:id" component={Course}/>
      <Route path="/favorite" component={Favorite}/>
   
    </Switch>
    </div>
  );
}

export default App;
