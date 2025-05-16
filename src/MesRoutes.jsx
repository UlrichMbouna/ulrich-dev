import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Patient from './components /patient/Patient';
// import Login from './components /patient/Login';
import Home from './Home';
// import Home from './components /patient/Home';

const MesRoutes = () => {
  return (
    <Router>
      <Routes>
     
        <Route path="/" element={<Home />} />



      </Routes>
    </Router>
  );
};

export default MesRoutes;
