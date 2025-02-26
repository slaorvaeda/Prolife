import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AddedMain() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
   <>
   <div className='md:flex'>

     <div data-aos="fade-right" className='h-60 w-1/4 md:w-[49vw] border-2 border-solid p-3 bg-amber-200 m-auto'>bye</div>
     <div className='h-60 w-1/4 md:w-[49vw] p-3 border-2 border-solid bg-amber-200 m-auto'>bye</div>
     <div data-aos="fade-left" className='h-60 w-1/4 md:w-[49vw] p-3 border-2 border-solid bg-amber-500 m-auto'>hello</div>
   </div>
   </>
  );
}

export default AddedMain;