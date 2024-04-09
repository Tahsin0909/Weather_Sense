import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './components/home/Home';
import NavBar from './components/navBar/NavBar';
function App() {
  return (
    <div className=''
      style={{ 
        backgroundImage: 'url(https://i.ibb.co/B4s84gp/ben-collins-VOdua-HPr-Lrs-unsplash-1.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100vw',
        height: '100vh'
       }}
    >
      <div className='border-2 border-red-600 lg:px-10 md:px-8 px-4 pt-4'>
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
