import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './HomePage';
import SampleArchitectures from './SampleArchitectures';
import ContactPage from './ContactPage';

//npm install --save @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
//CHAT GPT React Help**

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Sample-Architecture" element={<SampleArchitectures />} />
        <Route path="/Contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default App;