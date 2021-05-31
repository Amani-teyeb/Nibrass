
import './App.css';
import {Route, Switch } from "react-router-dom";
import Cours from "./Pages/Cours/Cours";
import Login from "./Components/Login/Login";
import Logint from "./Components/Login/Logint";
import Signup from "./Components/Signup/Signup";
import Signupt from "./Components/Signup/Signupt";
import Intro from './Pages/Intro';
import UserDashboard from './Pages/User/UserDashboard';
// import Home from './Pages/Home'
import AdminDashboard from './Pages/Admin/AdminDashboard'
import Allusers from './Components/Allusers/Allusers'

function App() {
  return (
    <div className="App">
        
  
    <Switch>
      <Route exact path="/"  component={Intro}/> 
      {/* <Route exact path="/home"  component={Home}/> */}
      <Route  path="/home"  component={Cours}/>
      <Route  path="/login"  component={Login}/>
      <Route  path="/signup"  component={Signup}/>
      <Route  path="/logint"  component={Logint}/>
      <Route  path="/signupt"  component={Signupt}/>
      <Route  path="/user/dashboard"  component={UserDashboard}/>
      <Route path="/admin/dashboard" component={AdminDashboard} />
      <Route path="/allusers" component={Allusers} />
    </Switch>
   
    
    </div>
  );
}

export default App;
