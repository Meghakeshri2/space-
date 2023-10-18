import React, { useState } from "react";
import Navbar from "../../components/Navbar";


const Destination = () => {
  const { destinations } = require("../../data.json");  
  console.log(destinations , 'destination')
const planets = ["MOON" , "MARS" , "EUROPA" , "TITAN"]
const [index , setIndex] = useState(0);


  return (
    <section className="px-5  bg-cover bg-center h-screen bg-destination-mob-bg sm:bg-destination-tab-bg md:bg-destination-tab-bg lg:bg-destination-bg">
      <Navbar />
      <div className="flex flex-col items-center justify-center text-center h-screen lg:flex-row lg:text-left lg:max-w-screen-lg lg:m-auto ">
        <article className="lg:w-1/2 md:w-full lg:mr-80 lg:h-3/4">
          <h1 className="destinationH1 text-white uppercase text-2xl lg:mt-10 lg:text-lg font-normal  lg:mr-12 lg:w-96 ">
            <span className="text-gray-500 font-bold">01 </span> Pick your
            destination
          </h1>
       
          <img
            src={ `${destinations[index].images.png}`}
            alt={destinations[index].name}
            className="moonImage md:top-4 md:ml-3/12 lg:top-0"
          />
        </article>

        <article className="lg:w-2/4 lg:h-2/4">
          <nav className=" h-12 flex  items-center justify-between mt-5">
            <ul className=" flex flex-row  w-72 justify-between  text-center ml-6 md:ml-36 lg:ml-0 ">
             {planets.map((planet , index)=>(
              <li className="cool-link cursor-pointer"  key={index+"Planet"} onClick={()=>{
                setIndex(index);
              }}    >{planet}</li>
          
             )) }
              {/* <li className="cool-link">MARS</li>
              <li className="cool-link">EUROPA</li>
              <li className="cool-link ">TITAN</li> */}
            </ul>
          </nav>
 
          <h1 className="lg:h-32 lg:p-2 text-white text-8xl">{destinations[index].name}</h1>
          <p className="destinationp lg:pt-1.5 text-gray-400  ">
          {destinations[index].description}
          </p>

          <div className="text-white mt-5 justify-around text-center items-center  flex flex-row ">
            <div>
              <p className="text-xs"> Avg. distance</p>
              <h1 className="text-2xl  "> {destinations[index].distance}</h1>
            </div>
            <div>
              <p className="text-xs"> Est. travel time</p>
              <h1 className="text-2xl ">{destinations[index].travel}</h1>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Destination;
