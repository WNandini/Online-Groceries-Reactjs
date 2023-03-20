import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./landingPages/landingPage";
import Login from "./authentication/component/login";
import Register from "./authentication/component/register";
import Header from "./comman/component/header";
import Dropdown from "./comman/component/dropdown";
import Footer from "./comman/component/footer";

const App = () => {
  return(
      <BrowserRouter>
        <Header/>
        <Dropdown/>
        <Routes>
          <Route exact path='/' element={<Landingpage/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/register' element={<Register/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
  )
}

{/* https://vegina-store.myshopify.com/ */}

export default App;