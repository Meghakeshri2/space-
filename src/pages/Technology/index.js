import React, { useState } from "react";
import Navbar from "../../components/Navbar";

//import launch from '/home/tspl/Documents/space/public/assets/technology/image-launch-vehicle-portrait.jpg';
const Technology = () => {
  const { technology } = require("../../data.json");
  console.log(technology, "tech");
  const machine = ["Launch vehicle", "Spaceport", "Space capsule"];
  const [index, setIndex] = useState(0);

  return (
    <section className="  bg-cover bg-center h-screen bg-technology-mob-bg sm:bg-technology-tab-bg md:bg-technology-tab-bg lg:bg-technology-bg">
      <Navbar />
      <div className="flex flex-col items-center justify-center text-center h-screen lg:flex-row lg:text-left lg:max-w-screen-lg lg:m-auto ">
        <div>
          <article className="lg:w-1/2 md:w-full lg:mr-80 lg:h-3/4">
            <h1 className="TechH1  text-white uppercase text-2xl lg:text-xl font-normal  lg:mr-12 sm:relative lg:top-32 sm:mb-52 sm:w-64 sm:left-10">
              <span className="text-gray-500 font-bold">03 </span> Space launch
              101
            </h1>
            <img
              src={`${technology[index].images.portrait}`}
              alt={technology[index].name}
              className="techmobimg  lg:hidden"
            ></img>
            <nav className="techmobnav flex  items-center justify-between lg:hidden  ">
              <ul className="  flex flex-row  justify-center   text-center  md:ml-72 lg:ml-0 gap-x-4">
                {machine.map((craft, index) => (
                  <li className="hover:cursor-pointer techNav h-12 border-2 border-r-96 p-2.5 border-white  hover:bg-white bg-none hover:text-black text-white "  key={index + ""}
                  onClick={() => {
                    setIndex(index);
                  }}>
                    <span
                      className="place-items-center p-2 m-2 text-center"
                     
                    >
                      {index + 1}
                    </span>
                  </li>
                ))}
              </ul>
            </nav>
            <h2 className="terminology lg:h-11 lg:p-2 lg:mt-18 text-white lg:text-lg lg:w-60  uppercase sm:relative">
              The terminology...
            </h2>
            <h1 className="TechName sm:relative  lg:h-12 lg:left-44 lg:bottom-20  text-white lg:text-5xl text-4xl  h-12 uppercase lg:mt-16">
              {" "}
              {technology[index].name}
            </h1>
            <p className="techp    text-gray-400 top-16 sm:relative  ">
              {technology[index].description}
            </p>
            <nav className=" TechNav flex  items-center justify-between sticky  ">
              <ul className="  flex flex-col  justify-center   text-center  lg:ml-0 gap-y-4">
                {machine.map((craft, index) => (
                  <li className="hover:cursor-pointer techNav h-16 border-2 border-r-96 p-2.5 border-white  hover:bg-white bg-none hover:text-black text-white " key={index + ""}
                  onClick={() => {
                    setIndex(index);
                  }}>
                    <span
                      className="place-items-center p-2 m-2 text-center relative top-2"
                      
                    >
                      {index + 1}
                    </span>
                  </li>
                ))}
              </ul>
            </nav>
          </article>
        </div>

        <article className="lg:h-2/4 lg:w-4/5">
          <img
            src={`${technology[index].images.portrait}`}
            alt={technology[index].name}
            className="techimg"
          ></img>
        </article>
      </div>
    </section>
  );
};

export default Technology;
