import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function FrontMain() {
  const handleScroll = () => {
    const scrollAmount = window.innerWidth >= 768 ? (window.innerHeight / 2) + 150 : (window.innerHeight / 3) + 100;
    window.scrollBy({
      top: scrollAmount,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="bg-sky-100 dark:bg-black dark:text-white h-[35vh] md:h-[70vh]">
        <div className="text-center flex justify-center items-center h-full pt-5">
          <div>
            <h1 className="text-3xl md:text-7xl font-bold">
              <span data-aos="fade-right" className="text-[rgb(63,141,200)]">Welcome</span>
              <span className='text-[rgb(44,100,163)]'> to </span>
              <span data-aos="fade-left" className='text-[rgb(200,61,43)]'>ProLife</span>
            </h1>
            <p className="text-lg md:text-3xl">Innovative appliances for home</p>
            <div className='border-2 rounded-[50%] h-9 w-9 md:h-12 md:w-12 bg-gray-100 m-auto md:mt-10 mt-4' onClick={handleScroll}>
              <svg className="w-5 h-5 md:w-8 md:h-8 m-auto mt-3 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }
        body {
          transition: transform 2s cubic-bezier(0.25, 0.1, 0.25, 1);
        }
      `}</style>
    </>
  );
}

export default FrontMain;