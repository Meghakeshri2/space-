import React from 'react'
import { BrowserRouter,Routes,Route, json } from "react-router-dom";
import Home from '../pages/Home';
import Destination from '../pages/Destination';
import Technology from '../pages/Technology';
import Crew from '../pages/Crew';

 
const Navigation = () => {
  return (
    <div>
  <Routes>
   
   <Route path="/" element={<Home/>}></Route>
   <Route path="/destination" element={<Destination/>}></Route>
    <Route path="/technology" element={<Technology/>}></Route>
   <Route path="/crew" element={<Crew/>}></Route> 

   
   </Routes>
    </div>
  )
}

export default Navigation
