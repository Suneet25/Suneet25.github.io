import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

export const Navbar = () => {
  const links = [
    {
      id: 1,
      link: "home",
      title: "home",
    },
    {
      id: 2,
      link: "about",
      title: "about",
    },
    {
      id: 3,
      link: "projects",
      title: "projects",
    },
    {
      id: 4,
      link: "experience",
      title: "skills",
    },
    {
      id: 5,
      link: "contact",
      title: "contact",
    },
  ];

  const [nav, setNav] = useState(false);

  return (
    <div className="flex justify-between items-center w-full h-20 px-4  text-black bg-white fixed block">
      <div>
        <h1 className="font-signature text-4xl">Suneet</h1>
      </div>

      <ul className="hidden sm:flex">
        <li className=" cursor-pointer font-medium capitalize hover:scale-125 duration-200 bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer group text-white w-fit px-2   flex items-center rounded-md">
          <a
            href="https://drive.google.com/uc?export=download&id=1FC36fgBRDgfGX_lHk08HVu3vDpJ_Ml2Y"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1M9u3mP8xheq2SIvyBD72CRoa_iUWyU2J/view?usp=sharing"
              )
            }
          >
            Resume
          </a>
        </li>
        {links.map(({ id, link, title }) => (
          <li
            key={id}
            className="px-3 cursor-pointer font-medium capitalize text-black-500 hover:scale-125 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {title}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-3 z-10 text-black-500 bg-#f4f5f6 sm:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute left-0 top-0 w-full h-screen bg-white">
          <li className=" text-2xl px-4 py-1 cursor-pointer font-medium capitalize hover:scale-125 duration-200 bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer group capitalize text-white-400 w-fit px-2   flex items-center rounded-md">
            <a
              href="https://drive.google.com/file/d/1M9u3mP8xheq2SIvyBD72CRoa_iUWyU2J/view?usp=sharing"
              target="blank"
            >
              Resume
            </a>
          </li>
          {links.map(({ id, link, title }) => (
            <li
              key={id}
              className="text-2xl px-4 py-4 cursor-pointer capitalize text-black-400"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
