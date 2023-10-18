import React from 'react'
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';

const Home = () => {
  



  return (
    <section className='px-5  bg-cover bg-center h-screen bg-home-mob-bg sm:bg-home-tab-bg md:bg-home-tab-bg lg:bg-home-bg xl:bg-home-bg 2xl:bg-home-bg'>
    <Navbar/>
    <div className=' flex flex-col items-center justify-center text-center h-screen lg:flex-row lg:text-left lg:max-w-screen-lg lg:m-auto'>
      <article className='lg:w-1/2 lg:mr-20'>
        
        <h1 className='text-2xl text-gray-400'>So, you want to travel to<span className='block text-5xl lg:text-6xl text-white mt-5 mb-10'>Space</span></h1>
  <p className='text-gray-400 '>Let’s face it; if you want to go to space, you might as well genuinely go to 
  outer space and not hover kind of on the edge of it. Well sit back, and relax 
  because we’ll give you a truly out of this world experience!</p>
  </article>
 
 <article className='mt-20'>
  
 <Link to='/destination'> <button className='bg-gray-100 rounded-full   text-3xl lg:text-4xl w-48 h-48 text-gray-800 font-bold uppercase '>Explore</button></Link>

 </article>   
  

 
    </div>
   </section>
    
  );

};
export default Home;
