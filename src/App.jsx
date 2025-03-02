import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar';
import logo from './assets/img/logo.png';
import favicon from './assets/img/favicon.png';
import DarkToggler from './Components/DarkToggler';
import Footer from './Components/Footer';
import AnnounceBar from './Components/AnnounceBar';


function App() {
  return (

    <>
      <AnnounceBar />
      <Navbar logo={logo} />
      <main className='min-h-screen'>
        <Outlet />
        <DarkToggler />
      </main>
      <Footer logo={favicon} />

    </>
  );
}

export default App;