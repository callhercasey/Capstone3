import React, {useState} from 'react';
import Home from './components/Home'
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";






function App() {



 return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element ={<Home />}> 
        </Route></Routes></BrowserRouter>

 )
}

export default App;
