import React from "react";
import Novbar from "./components/Novbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Trip1 from "./components/Trips/Trip1";
import Trip2 from "./components/Trips/Trip2";
import Trip3 from "./components/Trips/Trip3";
import Trip4 from "./components/Trips/Trip4";
import Trip5 from "./components/Trips/Trip5";
import Footer from "./components/Footer";
import Trip6 from "./components/Trips/Trip6";

const App=()=>{
  return(
    <div>



<BrowserRouter>
<Novbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/trip1" element={<Trip1/>}/>
    <Route path="/trip2" element={<Trip2/>}/>
    <Route path="/trip3" element={<Trip3/>}/>
    <Route path="/trip4" element={<Trip4/>}/>
    <Route path="/trip5" element={<Trip5/>}/>
    <Route path="/trip6" element={<Trip6/>}/>
  </Routes>
</BrowserRouter>
<Footer/>
    </div>
  )
}
export default App;