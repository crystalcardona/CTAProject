import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
// import NavBar from './Component/NavBar';
// import Home from './Component/Home';
// import Profile from './Component/Profile';
import LogIn from './Components/login';
import SignUp from './Components/signup'
import "./App.css"
import Header from "./Components/header"
import Home from "./Components/home"
import AuthProvider from "./providers/AuthContext"
import { AuthRoute } from "./util/routeUtil.js"



function App() {
  return (
    <div className="App">
    <AuthProvider>
    <Header />
    <Switch>
      <AuthRoute exact path="/">
        <SignUp />
      </AuthRoute>
      <AuthRoute path="/login">
      <LogIn />
      </AuthRoute>
     <Route exact path="/home">
       <Home />
     </Route>
     </Switch>

     {/* <Route path={"/profile"} component={Profile}/> */}
      {/* <Route exact path={"/login"} component={LogIn}/>
      <Route component={Error} /> */}

    </AuthProvider>

    </div>
  );
}

export default App;
