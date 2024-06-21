"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineAlignCenter, AiOutlineHome, AiOutlineUser, AiFillBulb, AiOutlineBulb } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsShare } from "react-icons/bs";
import ThemeSwitch from "./ThemeSwitch";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { resolvedTheme } = useTheme();

  const sideList = [
    {
      icon: <AiOutlineHome className="text-xl" />,
      title: "Home",
    },
    {
      icon: <AiOutlineUser className="text-xl" />,
      title: "About Me",
    },
    {
      icon: <AiOutlineAlignCenter className="text-xl" />,
      title: "Projects",
    },
    {
      icon: <AiOutlineBulb className="text-xl" />,
      title: "Skills",
    },
  ];

  const navList = [
    {
      icon: <AiOutlineHome className="text-xl mr-2" />,
      title: "Home",
      link: "/"
    },
    {
      icon: <AiOutlineBulb className="text-xl mr-2" />,
      title: "Skills",
      link: "#skills"
    },
    {
      icon: <AiOutlineUser className="text-xl" />,
      title: "About Me",
      link: "#about"
    },
    {
      icon: <AiOutlineAlignCenter className="text-xl" />,
      title: "Projects",
      link: "#projects"
    },
  ];

  const handleDrawer = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleEscKeyPress = (e: any) => {
      if (e.keyCode === 27 && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.setProperty("overflow", "hidden");
    } else {
      document.body.style.removeProperty("overflow");
    }

    document.addEventListener("keydown", handleEscKeyPress);

    return () => {
      document.removeEventListener("keydown", handleEscKeyPress);
    };
  }, [isOpen]);

  return (
    <nav className={`flex w-full items-center justify-between px-6 h-16 z-10
      ${resolvedTheme == "dark" ? "bg-[#161515] text-white" : "bg-white text-black"}`}>  
      <div className="flex items-center font-inter font-bold">
        <button className="mr-2" aria-label="Open Menu" onClick={handleDrawer}>
          <GiHamburgerMenu className="text-3xl" />
        </button>

        SUBHAM BANERJEE
      </div>

      <div className="flex items-center">
        <div className="hidden md:flex md:justify-between md:bg-transparent">
          {navList.map(({ icon, title, link }, index) => {
            return (
              <a
                key={index}
                href={link}
                className={`flex items-center font-medium mr-2 text-center ${resolvedTheme == "dark" ? "bg-[#161515] text-white" : "bg-white text-dark"}`}>
              <button
                key={index}
                title="Wishlist"
                className={`flex items-center p-3 font-medium mr-2 text-center ${resolvedTheme == "dark" ? "bg-[#161515] text-white" : "bg-white text-dark"}`}
              >
                <span>{icon}</span>
                <span>{title}</span>
              </button>
              </a>
            );
          })}
        </div>
        <ThemeSwitch />
      </div>

      {isOpen && (
        <div className="z-10 fixed inset-0 transition-opacity">
          <div
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black opacity-50"
            tabIndex= {0}
          ></div>
        </div>
      )}

      <aside
        className={`transform top-0 left-0 w-64 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${
          isOpen ? "translate-x-0" : "-translate-x-full" 
        } ${resolvedTheme == "dark" ? "bg-[#000000]" : "bg-white"}`}
      >
        <span className="flex w-full items-center p-4  font-inter font-bold">
        SUBHAM BANERJEE
        </span>
        {sideList.map(({ icon, title }, index) => {
          return (
            <span
              key={index}
              className="flex items-center p-4 hover:bg-pink-500 hover:text-white "
            >
              <span className="mr-2">{icon}</span> <span>{title}</span>
            </span>
          );
        })}
        <div className="fixed bottom-0 w-full">
          <button className="flex items-center p-4 text-white bg-blue-500 hover:bg-blue-600 w-full">
            <span className="mr-2">
              <BsShare className="text-2xl" />
            </span>

            <span>Share</span>
          </button>
        </div>
      </aside>
    </nav>
  );
};

export default Navbar;