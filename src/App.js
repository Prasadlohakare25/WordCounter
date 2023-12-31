import './App.css';
import About from './components/About';
import MainPage from './components/MainPage';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
