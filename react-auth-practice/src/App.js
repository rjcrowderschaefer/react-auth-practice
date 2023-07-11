import React, { useState } from 'react';
import './App.css';
import {Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Preference from './components/Preference';
import Login from './components/Login';
import useToken from './components/useToken';

function App() {

  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

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
