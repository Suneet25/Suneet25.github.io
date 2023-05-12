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

export const Tools = () => {
  let tools = [
    {
      id: 1,
      src: github,
      title: "Github",
      style: "shadow-black-600",
    },
    {
      id: 2,
      src: postman,
      title: "Postman",
      style: "shadow-black-600",
    },
    {
      id: 3,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-black-600",
    },
    {
      id: 4,
      src: nodejs,
      title: "Nodejs",
      style: "shadow-black-600",
    },
    {
      id: 5,
      src: express,
      title: "Express",
      style: "shadow-black-600",
    },
    {
      id: 6,
      src: mongoose,
      title: "Mongoose",
      style: "shadow-black-600",
    },
  ];

  return (
    <div
      name="tools"
      className="bg-[black] w-full text-white md:h-screen"
      style={{  textAlign: "center" }}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-10">
          <p className="text-4xl font-bold inline border-b-4 border-white-500">
            Tools
          </p>
          <p className="py-6"> These are the tools i have worked with</p>
        </div>

        <div className="w-full grid  sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 px-12 sm:px-0">
          {tools.map(({ id, src, title, style }) => (
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
      </div>
    </div>
  );
};
