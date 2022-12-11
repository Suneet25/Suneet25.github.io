import React from "react";

export const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
      style={{ marginTop: "-70px" }}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8" style={{ marginTop: "-70px" }}>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="mt-20 text-2xl">
          A Skilled full stack developer and quick learner who can quickly adapt
          to new environments. Looking for a challenging role in the industry to
          utilize skills and learn.
        </p>
        <br />
        <p className="text-2xl">
          My current studies are in the MERN Full Stack Programme at Masai
          School, where we got hands on expeience in 10 to 15 live projects.
        </p>
      </div>
    </div>
  );
};
