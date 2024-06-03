import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
function App() {
  return (
    <div className=''>
      <div className='lg:px-10 md:px-8 px-4 pt-4 flex md:flex-row flex-col md:gap-4 gap-2'>
        <NavBar />
        <div>
        <Outlet />
        </div>

      </div>
    </div>
  );
}

export default App;
