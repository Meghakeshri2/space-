import React from "react";
import Navbar from "../../components/Navbar";
//import hurley from '/home/tspl/Documents/space/public/assets/crew/image-douglas-hurley.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const Crew = () => {
  const { crew } = require("../../data.json");
  console.log(crew, "persons");
  const member = [
    "Douglas Hurley",
    "Mark Shuttleworth",
    "Victor Glover",
    "Anousheh Ansari",
  ];
  const [index, setIndex] = useState(0);

 

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(member.length-1 === index ? 0 : index + 1);
    }, 2000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="px-5 m-0 p-0  bg-cover bg-center h-screen bg-crew-mob-bg sm:bg-crew-tab-bg md:bg-crew-tab-bg lg:bg-crew-bg">
      <Navbar />
      <div className="flex flex-col items-center justify-center text-center h-screen lg:flex-row lg:text-left lg:max-w-screen-lg lg:m-auto ">
        <div>
          <article className="lg:w-1/2 md:w-full lg:mr-80 lg:h-3/4">
            <h1 className="CrewH1  text-white uppercase text-2xl lg:text-lg font-normal  lg:mr-12 sm:relative lg:top-0">
              <span className="text-gray-500 font-bold">02 </span> Meet Your
              Crew
            </h1>
            <img
              src={`${crew[index].images.png}`}
              alt={crew[index].name}
              className="crewMobimg sm:hidden"
            ></img>
            <nav className="crewmobnav  flex  items-center justify-between  mt-6 lg:mt-16 sm:hidden">
              <ul className=" flex flex-row  w-36 justify-between  text-center ml-6 md:ml-36 lg:ml-0 ">
                {member.map((person, index) => (
                  <li>
                    <FontAwesomeIcon
                      icon={faCircle}
                      className="text-gray-600 hover:text-white hover:cursor-pointer"
                      key={index + ""}
                      onClick={() => {
                        setIndex(index);
                      }}
                    />
                  </li>
                ))}{" "}
              </ul>
            </nav>
            <h2 className="commander lg:h-11 lg:p-2 lg:mt-18 text-white lg:text-3xl   uppercase sm:relative lg:top-11">
              {crew[index].role}
            </h2>
            <h1 className="crewName lg:h-12 lg:p-2 text-white text-3xl sm:text-4xl h-12 uppercase lg:mt-12">
              {crew[index].name}
            </h1>
            <p className="crewp  lg:pt-1.5 text-gray-400 sm:mt-8  ">
              {crew[index].bio}
            </p>

            <nav className="crewNav   flex  items-center justify-between sticky  mt-6 lg:mt-16">
              <ul className=" flex flex-row  w-36 justify-between  text-center ml-6 md:ml-36 lg:ml-0 ">
                {member.map((person, index) => (
                  <li>
                    <FontAwesomeIcon
                      icon={faCircle}
                      className="text-gray-600 hover:text-white hover:cursor-pointer"
                      key={index + ""}
                      onClick={() => {
                        setIndex(index);
                      }}
                    />
                  </li>
                ))}
                {/*<li><FontAwesomeIcon icon={faCircle} className="text-gray-600 hover:text-white" /></li>
          <li><FontAwesomeIcon icon={faCircle} className="text-gray-600 hover:text-white" /></li>
  <li><FontAwesomeIcon icon={faCircle} className="text-gray-600 hover:text-white" /></li>*/}
              </ul>
            </nav>
          </article>
        </div>

        <article className="lg:mt-44 lg:w-3/5">
          <img
            src={`${crew[index].images.png}`}
            alt={crew[index].name}
            className="crewImage"
          ></img>
        </article>
      </div>
    </section>
  );
};

export default Crew;
