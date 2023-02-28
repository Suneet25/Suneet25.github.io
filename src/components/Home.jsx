import React from "react";
// import myImage1 from "../assests/myimagec1.png";
import { MdKeyboardArrowRight } from "react-icons/md";
// import { Link } from "react-scroll";
import style from "../styles/Home.module.css";
import { SocialLinks } from "./SocialLinks";
export const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-#f4f5f6-800 ">
      <div className="max-w-screen-lg  mx-auto   items-center justify-center h-full px-4 flex flex-row ">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-2xl md:text-3xl lg:text-6xl text-black font-bold">
            I'm a Full Stack Developer
          </h2>

          <div style={{ marginTop: "30px" }}>
            <a
              href="https://drive.google.com/uc?export=download&id=1FC36fgBRDgfGX_lHk08HVu3vDpJ_Ml2Y"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1M9u3mP8xheq2SIvyBD72CRoa_iUWyU2J/view?usp=sharing"
                )
              }
              smooth
              duration={500}
              className="group text-white w-fit px-3 py-3 my-2  flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
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

        <div>
          <img
            className={style.Image}
            src="https://avatars.githubusercontent.com/u/107473938?v=4"
            alt="suneet"
          />
        </div>
      </div>
    </div>
  );
};
