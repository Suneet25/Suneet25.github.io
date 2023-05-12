import React from "react";

export const About = () => {
  return (
    <div
      name="about"
      // className="w-full mt-0 md:mt-5 px-8 "
      className="bg-[black] w-full   text-white "
      style={{ textAlign: "center" }}
    >
     <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-content w-full" >
        <div className="pb-5" >
          <p className="text-4xl font-bold inline border-b-4 border-[white]">
            About
          </p>
        </div>
        <p className="mt-10 text-1xl md:text-2xl  lg:text-2xl ">
          A Skilled full stack developer and quick learner who can quickly adapt
          to new environments. Looking for a challenging role in the industry to
          utilize skills and learn.
        </p>
        <br />
        <p className="text-1xl md:text-2xl lg:text-2xl ">
          My current studies are in the MERN Full Stack Programme at Masai
          School,where we go through 1000 hours of coding and 100 hours of DSA
          and Soft Skill and we got hands on expeience in 10 to 15 live
          projects.
        </p>
      </div>
    </div>
  );
};
