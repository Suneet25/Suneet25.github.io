import React from "react";
import Coschedule from "../assests/Portfolio/Coschedule.png";
import Fitnessblender from "../assests/Portfolio/Fitnessblender.png";
import Flowers from "../assests/Portfolio/1800Flowers.png";
import Zoomcar from "../assests/Portfolio/Zoomcar.png";
import Awesomerce from "../assests/Portfolio/Awesomerce.png";
import Fastaim from "../assests/Portfolio/Fastaim.png";

export const Projects = () => {
  const portfolios = [
    {
      id: 1,
      heading: "1800Flowers",
      src: Flowers,
      glink: "https://github.com/Suneet25/1800.flowers.com-clone",
      nlink: "https://bblooms.vercel.app/",
      about:
        "It is an E-commerce website where you can buy Products related to occasions like birthday, sympathy, wedding anniversay, funeral service etc. ",
      techstack:
        "HTML || CSS || JAVASCRIPT || API || REACT || CHAKRA || MONGODB",
    },
    {
      id: 2,
      heading: "Awesomerce",
      src: Awesomerce,
      glink: "https://github.com/Suneet25/miniEcommerce",
      nlink: "https://awesomerce.vercel.app/",
      about:
        "It is an E-commerce website where you can buy Products etc. Product range include flowers, clocks,essentials etc.This is a individual project which i have build with in 5 days.",
      techstack: "HTML || CSS || JAVASCRIPT || API || REACT || MONGO DB || EXPRESS || BRAINTREE || CHAKRA ",
    },
    {
      id: 3,
      heading: "Zoomcar",
      src: Zoomcar,
      glink: "https://github.com/Suneet25/sick-insect-8581",
      nlink: "https://sick-insect-8581.vercel.app/",
      about:
        "Zoomcar is an Indian car sharing platform, headquartered in Bangalore. It operate in Self Driving Car Rentals",
      techstack: "HTML || CSS || JAVASCRIPT || API || REACT || REDUX || CHAKRA",
    },
    {
      id: 4,
      heading: "Fastaim",
      src: Fastaim,
      glink: "https://github.com/3003abhishek/auspicious-fog-5566",
      nlink: "https://fast-aim-game.vercel.app/",
      about:
        "Fast Aim is a gaming Website that allows playing both Single Player and Multi-Player. This is a collaborative project; we completed this website in 3 days.",
      techstack: "HTML || CSS || TYPESCRIPT || API || REACT || SOCKET.IO || CHAKRA",
    },


    {
      id: 5,
      heading: "Fitnessblender",
      src: Fitnessblender,
      glink: "https://github.com/Suneet25/loyal-elbow-6166",
      nlink: "https://venerable-bubblegum-24be2e.netlify.app/",
      about:
        "Fitness Blender Clone is MERN Stack fitness web application that allows you to buy suppliments & dietchart online.",
      techstack: "HTML || CSS || JAVASCRIPT || API || REACT || CHAKRA",
    },

    {
      id: 6,
      heading: "Coschedule",
      src: Coschedule,
      glink: "https://github.com/anirudha2097/fun-note-365",
      nlink: "https://heroic-alfajores-0820ff.netlify.app/",
      about:
        "Coshedule is an award-winning, AI-powered task tracking software that automates dailytasksheet creation.",
      techstack: "HTML || CSS || JAVASCRIPT || API || ES6",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-[black] w-full pt-20  text-white h-full "
      style={{textAlign: "center" }}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-white-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="w-full grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0">
          {portfolios.map(
            ({ id, src, nlink, glink, about, techstack, heading }) => (
              <div 
                key={id}
                className="shadow-md shadow-gray-600 rounded-lg "
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                }}
              >
                <div >
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-500 hover:scale-105 "
                />
                </div>

             
                <div>
                  <div>
                  <h3
                    style={{ textAlign: "center", marginTop: "20px" }}
                    className="text-2xl px-4 py-4 cursor-pointer capitalize text-orange-500 font-bold"
                  >
                    {heading}
                  </h3>
                    </div>
                    <div>

                  <p
                    style={{
                      marginTop: "20px",
                      width: "80%",
                      margin: "auto",
                    }}
                  >
                    {about}
                  </p>
                    </div>
                </div>
                <div
                  style={{
                    marginTop: "20px",
                    textAlign: "center",
                  }}
                >
                  <h5>Tech Stack :-</h5>
                  <span>{techstack}</span>
                </div>
                <div className="flex justify-center items-center">
                  <a href={nlink} target="_blank" rel="noreferrer">
                    <button className=" m-4 duration-200 hover:scale-110 bg-gradient-to-r from-orange-500 to-orange-500 cursor-pointer py-2 px-4 rounded text-white ">
                      Live Demo
                    </button>
                  </a>
                  <a href={glink} target="_blank" rel="noreferrer ">
                    <button className=" m-4 duration-200 hover:scale-110 bg-gradient-to-r from-orange-500 to-orange-500 cursor-pointer py-2 px-4 rounded text-white ">
                      Source Code
                    </button>
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};
