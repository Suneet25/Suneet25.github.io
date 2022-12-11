import React from "react";
// import myImage1 from "../assests/myimagec1.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

export const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 sm:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl md:text-6xl text-white font-bold">
            I'm a Full Stack Developer
          </h2>

          <div style={{ marginTop: "30px" }}>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-500">
                <MdKeyboardArrowRight size={30} />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src="https://avatars.githubusercontent.com/u/107473938?v=4"
            alt="my profile"
            className="rounded-2xl mx-auto w-1/3 md:w-1/3 "
            style={{ width: "300px", height: "300px" }}
          />
        </div>
      </div>
    </div>
  );
};
