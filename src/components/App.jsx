import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import PerformancePartForm from "./PerformancePartForm";
import PerformancePartsList from "./PerformancePartsList";

function App() {
  return (
    <>
      <NavBar />
      <div className='container'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/parts' element={<PerformancePartsList />} />
          <Route path='/partform' element={<PerformancePartForm />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
