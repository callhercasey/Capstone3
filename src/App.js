import React, { useState } from "react";
import Home from "./components/Home";
import ReactDOM from "react-dom/client";
import Signup from "./components/Signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/ForgotPassword";

function App() {
 

  return (
    
   <AuthProvider>
      <Router>
         <Switch>
          <PrivateRoute exact path="/profile" component={Dashboard} />
             <Route path="/" component={Home} />
             <Route path="/signup" component={Signup} />
             <Route exact path="/login" component={Login} />
             <Route path="/forgot-password" component={ForgotPassword} />
         </Switch>
       </Router>
       </AuthProvider>
  
  
  )

}
export default App;

