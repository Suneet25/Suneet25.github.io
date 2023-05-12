import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

export const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/suneetpanigrahi25/",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Suneet25",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={30} />
        </>
      ),
      href: " mailto:suneetpanigrahi53@gmail.com ",
    },
    {
      id: 4,
      child: (
        <>
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "https://drive.google.com/file/d/1M9u3mP8xheq2SIvyBD72CRoa_iUWyU2J/view?usp=sharing",
      download: true,
    },
  ];

  return (
    <div className=" lg:flex flex-row ">
      <ul style={{ display: "flex" }}>
        {links.map(({ id, child, href, download }) => (
          <li key={id} className="flex flex-row justify-center  h-14 px-4 ">
            <a
              href={href}
              className="bg-[black] flex  justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
