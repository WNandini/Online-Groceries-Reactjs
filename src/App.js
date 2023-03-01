import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./component/landingPage";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Landingpage/>}/>
        {/* https://vegina-store.myshopify.com/ */}
      </Routes>
    </BrowserRouter>
  )
}
export default App;