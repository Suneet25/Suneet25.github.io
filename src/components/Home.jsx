import React from "react";
// import myImage1 from "../assests/myimagec1.png";
import { MdKeyboardArrowRight } from "react-icons/md";
// import { Link } from "react-scroll";
import style from "../styles/Home.module.css";
import { SocialLinks } from "./SocialLinks";
import Typewriter from "typewriter-effect";

export const Home = () => {
  return (
    <div name="Home" className="sm:h-screen w-full pt-24 bg-[black]">
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center h-full w-full">
        <h2 className="text-5xl sm:text-5xl font-bold tracking-wide text-white" >
          Hi,I'm  <span style={{ color: "orange" }}>Suneet Panigrahi</span>
        </h2>
        <p className="py-4 max-w-md tracking-wide text-lg ">
          <span className="text-5xl font-Big"> I am a</span>
          <span className="text-[white] text-3xl font-Big">
            <Typewriter
              options={{
                strings: [
                  "MERN Stack Web Developer",
                  "Full time coder",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
          <p className="text-xl text-white mt-6">
          A Skilled full stack developer and quick learner who can quickly adapt to new environments. Looking for a challenging role in the industry to utilize skills and learn.
          </p>
        </p>

          <div style={{ marginTop: "30px" }}>
            <a
              href="https://drive.google.com/uc?export=download&id=1FC36fgBRDgfGX_lHk08HVu3vDpJ_Ml2Y"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1K5uTLYIsTOTGFiPUTAF8z489W7uEuZo4/view?usp=sharing"
                )
              }
             
           
              smooth
              duration={500}
              className="group text-white w-fit px-3 py-3 my-2  flex items-center rounded-md bg-gradient-to-r from-orange-500 to-orange-500 cursor-pointer"
            >
              Resume
              <span className="group-hover:rotate-90 duration-500">
                <MdKeyboardArrowRight size={30} />
              </span>
            </a>
          </div>
          <div style={{ marginTop: "30px", marginLeft: "-18px" }}>
            <SocialLinks />
          </div>
        </div>

        <div className="mb-10  sm:mb-0 w-3/5  md:w-4/5 rounded-md " >
          <img
            className="rounded-md shadow-gray"
            src="https://avatars.githubusercontent.com/u/107473938?v=4"
            alt="suneet"
          />
        </div>
      </div>
    </div>
  );
};

// w-5/5 md:w-4/5 sm:
