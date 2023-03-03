import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./component/landingPage";
import Login from "./authentication/login";
import Register from "./authentication/register";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Landingpage/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/register' element={<Register/>}/>
        {/* https://vegina-store.myshopify.com/ */}
      </Routes>
    </BrowserRouter>
  )
}
export default App;