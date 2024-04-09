import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
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
      <div className='lg:px-10 md:px-8 px-4 pt-4 flex md:flex-row flex-col md:gap-4 gap-2'>
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
