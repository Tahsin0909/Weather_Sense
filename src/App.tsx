import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './components/home/Home';
function App() {
  return (
    <div>
      <Home/>
      <Outlet />
    </div>

  );
}

export default App;
