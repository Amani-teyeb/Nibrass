import React from 'react'
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MyNavBar from '../Components/MyNavBar'
import Login from '../Components/Login/Login'
import Logint from '../Components/Login/Logint'
import Signup from '../Components/Signup/Signup'
import Signupt from '../Components/Signup/Signupt'
import Cours from './Cours/Cours';
import App from "../App"

const Home = () => {
  return (
    <>
      <MyNavBar/> 

    <Switch>
       
      <Route exact path="/home"  component={Cours}/>
      <Route exact path="/home/login"  component={Login}/>
      <Route exact path="/home/signup"  component={Signup}/>
      <Route exact path="/home/logint"  component={Logint}/>
      <Route exact path="/home/signupt"  component={Signupt}/>
    </Switch>
    
    </>
  )
}

export default Home
