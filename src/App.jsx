import React from 'react';
import Navbar from './Components/Navbar';
import logo from './assets/img/logo.png';
import favicon from './assets/img/favicon.png';
import DarkToggler from './Components/DarkToggler';
import Footer from './Components/Footer';
import AnnounceBar from './Components/AnnounceBar';
import Home from './Components/Home';

function App() {
  return (
    <>
      <AnnounceBar />
      <Navbar logo={logo} />
      <Home />
      <main className='h-screen'>
      <DarkToggler />
      </main>

      <Footer logo={favicon} />

    </>
  );
}

export default App;