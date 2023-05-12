import React from "react";
import html from "../assests/html.png";
import css from "../assests/css.png";
import javascript from "../assests/javascript.png";
import chakra from "../assests/chakra.png";
import react from "../assests/react.png";
import github from "../assests/github.png";
import redux from "../assests/redux.png";
import tailwind from "../assests/tailwind.png";
import nextjs from "../assests/nextjs.png";
import git from "../assests/git.png";
import postman from "../assests/postman.png";
import mongodb from "../assests/mongodb.png";
import mongoose from "../assests/mongoose.png";
import express from "../assests/expressjs.png";
import nodejs from "../assests/nodejs.png";

export const Skills = () => {
  const skills = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "Java Script",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: nextjs,
      title: "NextJs",
      style: "shadow-black-600",
    },
    {
      id: 6,
      src: redux,
      title: "Redux",
      style: "shadow-black-600",
    },
    {
      id: 7,
      src: chakra,
      title: "Chakra",
      style: "shadow-black-600",
    },
    {
      id: 8,
      src: git,
      title: "Git",
      style: "shadow-black-600",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-[black] w-full text-white md:h-screen"
      style={{ textAlign: "center" }}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-10">
          <p className="text-4xl font-bold inline border-b-4 border-white-500">
            Skills
          </p>
          <p className="py-6"> These are the skills i have worked with</p>
        </div>

        <div className="w-full grid  sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 px-12 sm:px-0">
          {skills.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md shadow-white rounded-lg ${style}`}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={src}
                alt=""
                className="rounded-md duration-500 mx-auto hover:scale-105"
                style={{ width: "70px", height: "70px" }}
              />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
        {/* ////////////////////////// */}
      </div>
    </div>
  );
};
