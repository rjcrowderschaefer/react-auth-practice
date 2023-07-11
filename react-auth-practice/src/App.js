import React from 'react';
import './App.css';
import {Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Preference from './components/Preference';

function App() {
  return (
    <>
      <div className="wrapper">
        <h1>Application</h1>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/prefernces' element={<Preference />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
