"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
import { navbarData, socilaMedia } from "@/common/data/datas";
import Image from "next/image";
type Props = {};

export const Navbar: React.FC = (props: Props) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const crossStyleTop = {
    transform: menuIsOpen
      ? "translate3d(0px, 3px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(45deg) skew(0deg, 0deg)"
      : "none",

    transition: "transform 0.3s ease",
  };

  const crossStyleBottom = {
    transform: menuIsOpen
      ? "translate3d(0px, -3px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-45deg) skew(0deg, 0deg)"
      : "none",
    transition: "transform 0.3s ease",
  };

  const menuBgTransition = {
    opacity: menuIsOpen ? "0.5" : "0",
    transition: "transform 0.3s ease",
    display: menuIsOpen ? "" : "none",
  };

  const hamburgerMenuTransition = {
    transition:
      "transform 0.7s ease, top 0.7s ease, opacity 0.7s ease, height 0.7s ease, display 0s ease",
    top: menuIsOpen ? "5rem" : "5rem",
    opacity: menuIsOpen ? "1" : "0",
    height: menuIsOpen ? "25rem" : "0",
    display: "block",
  };

  const [hoveredItem, setHoveredItem] = useState("");

  const handleMouseEnter = (itemName: string) => {
    setHoveredItem(itemName);
  };

  const handleMouseLeave = () => {
    setHoveredItem("");
  };

  return (
    <>
      <nav className="fixed w-screen top-0 bg-white z-[9999]">
        <div
          className="fixed block top-0 bottom-0 right-0 left-0 cursor-pointer bg-gray-700"
          role="button"
          onClick={handleClick}
          style={menuBgTransition}
        />
        <div className="h-24 justify-between items-center flex flex-row border-b sm:pl-28 sm:pr-28 pl-5 pr-5 ">
          <Link href="/" className="text-2xl font-medium">
            {navbarData.title}
          </Link>

          <div className="flex">
            <div className="mr-4 hidden  sm:grid grid-row-1 grid-flow-col gap-2">
              <a
                target="_blank"
                href={socilaMedia.universityOfCalifornia}
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <Image
                  src={"./ucr_black.png"}
                  alt="ucr_black"
                  className="h-[2.2rem] w-[2.2rem] rounded-md object-contain"
                  width={40}
                  height={40}
                />
              </a>
              <a
                target="_blank"
                href={socilaMedia.universityOfAppliedSciences}
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <Image
                  src={"./sakarya_black.png"}
                  alt="ucr_black"
                  className="h-[2.2rem] w-[2.2rem] rounded-md object-contain"
                  width={40}
                  height={40}
                />
              </a>
              <a
                target="_blank"
                href={socilaMedia.googleScholar}
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <Image
                  src={"./google_black.png"}
                  alt="ucr_black"
                  className="h-[2.2rem] w-[2.2rem] rounded-md object-contain"
                  width={40}
                  height={40}
                />
              </a>
              <a
                target="_blank"
                href={socilaMedia.academia}
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <Image
                  src={"./acamedia_black.png"}
                  alt="ucr_black"
                  className="h-[2.2rem] w-[2.2rem] rounded-md object-contain"
                  width={40}
                  height={40}
                />
              </a>
              <a
                target="_blank"
                href={socilaMedia.github}
                rel="noopener noreferrer"
              >
                <FaGithubSquare size={"100%"} className="h-10" />
              </a>
              <a
                target="_blank"
                href={socilaMedia.linkedin}
                rel="noopener noreferrer"
              >
                <FaLinkedin size={"100%"} className="h-10" />
              </a>
              <a
                target="_blank"
                href={socilaMedia.medium}
                rel="noopener noreferrer"
              >
                <FaMedium size={"100%"} className="h-10" />
              </a>
              <a
                target="_blank"
                href={socilaMedia.twitter}
                rel="noopener noreferrer"
              >
                <FaTwitterSquare size={"100%"} className="h-10" />
              </a>
            </div>
            <Link
              className="flex items-center justify-center sm:px-6 px-3 h-10 bg-black text-white text-base text-center mr-4"
              href="/contact"
            >
              {`LET'S TALK`}
            </Link>
            <div
              className="w-10 h-10 bg-black items-center justify-center flex flex-col z-50"
              role="button"
              onClick={handleClick}
            >
              <div
                className="w-5 h-0.5 mt-0.5 mb-0.5 bg-white "
                style={crossStyleTop}
              />
              <div
                className="w-5 h-0.5 mt-0.5 mb-0.5 bg-white "
                style={crossStyleBottom}
              />
            </div>
          </div>
          <nav
            className=" bg-neutral-950 absolute sm:w-96 w-60  sm:right-28 right-5 z-50"
            style={hamburgerMenuTransition}
          >
            <div
              className="grid-flow-row h-full"
              style={{ display: menuIsOpen ? "grid" : "none" }}
            >
              <Link
                href={"/"}
                onClick={handleClick}
                className="text-white p-5 font-normal text-xl  flex items-center"
                onMouseEnter={() => handleMouseEnter("home")}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className="w-2 h-2 bg-white"
                  style={{
                    marginRight: hoveredItem === "home" ? "1.25rem" : "",
                    transform:
                      hoveredItem === "home"
                        ? ""
                        : "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transition: "transform 0.3s ease, margin 0.3s ease",
                    borderRadius: 40,
                  }}
                />
                HOME
              </Link>
              <Link
                href={"/ventures"}
                onClick={handleClick}
                className="text-white p-5 font-normal text-xl flex items-center"
                onMouseEnter={() => handleMouseEnter("ventures")}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className="w-2 h-2 bg-white"
                  style={{
                    marginRight: hoveredItem === "ventures" ? "1.25rem" : "",
                    transform:
                      hoveredItem === "ventures"
                        ? ""
                        : "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transition: "transform 0.3s ease, margin 0.3s ease",
                    borderRadius: 40,
                  }}
                />
                VENTURES
              </Link>

              <Link
                href={"/about"}
                onClick={handleClick}
                className="text-white p-5 font-normal text-xl flex items-center"
                onMouseEnter={() => handleMouseEnter("about")}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className="w-2 h-2 bg-white"
                  style={{
                    marginRight: hoveredItem === "about" ? "1.25rem" : "",
                    transform:
                      hoveredItem === "about"
                        ? ""
                        : "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transition: "transform 0.3s ease, margin 0.3s ease",
                    borderRadius: 40,
                  }}
                />
                ABOUT
              </Link>
              <Link
                href={"/contact"}
                onClick={handleClick}
                className="text-white p-5 font-normal text-xl flex items-center"
                onMouseEnter={() => handleMouseEnter("contact")}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className="w-2 h-2 bg-white"
                  style={{
                    marginRight: hoveredItem === "contact" ? "1.25rem" : "",
                    transform:
                      hoveredItem === "contact"
                        ? ""
                        : "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transition: "transform 0.3s ease, margin 0.3s ease",
                    borderRadius: 40,
                  }}
                />
                CONTACT
              </Link>
              <div className="grid sm:hidden grid-row-2 grid-cols-4 gap-2 border-t border-white p-2">
                <a
                  target="_blank"
                  href={socilaMedia.universityOfCalifornia}
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <Image
                    src={"./ucr_white.png"}
                    alt="ucr_black"
                    className="h-[2.2rem] w-[2.2rem] rounded-md object-contain"
                    width={40}
                    height={40}
                  />
                </a>
                <a
                  target="_blank"
                  href={socilaMedia.universityOfAppliedSciences}
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <Image
                    src={"./sakarya_white.png"}
                    alt="ucr_black"
                    className="h-[2.2rem] w-[2.2rem] rounded-md object-contain"
                    width={40}
                    height={40}
                  />
                </a>
                <a
                  target="_blank"
                  href={socilaMedia.googleScholar}
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <Image
                    src={"./google_white.png"}
                    alt="ucr_black"
                    className="h-[2.2rem] w-[2.2rem] rounded-md object-contain"
                    width={40}
                    height={40}
                  />
                </a>
                <a
                  target="_blank"
                  href={socilaMedia.academia}
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <Image
                    src={"./academia_white.png"}
                    alt="ucr_black"
                    className="h-[2.2rem] w-[2.2rem] rounded-md object-contain"
                    width={40}
                    height={40}
                  />
                </a>
                <a
                  target="_blank"
                  href={socilaMedia.github}
                  rel="noopener noreferrer"
                >
                  <FaGithubSquare size={"100%"} className="h-10" fill="white" />
                </a>
                <a
                  target="_blank"
                  href={socilaMedia.linkedin}
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={"100%"} className="h-10" fill="white" />
                </a>
                <a
                  target="_blank"
                  href={socilaMedia.medium}
                  rel="noopener noreferrer"
                >
                  <FaMedium size={"100%"} className="h-10" fill="white" />
                </a>
                <a
                  target="_blank"
                  href={socilaMedia.twitter}
                  rel="noopener noreferrer"
                >
                  <FaTwitterSquare
                    size={"100%"}
                    className="h-10"
                    fill="white"
                  />
                </a>
              </div>
              {/*  <div className="flex w-full items-center justify-center sm:hidden border-t border-white p-2">
                <a
                  target="_blank"
                  href={socilaMedia.github}
                  rel="noopener noreferrer"
                >
                  <FaGithubSquare
                    size={"100%"}
                    className="h-10 mr-4"
                    fill="white"
                  />
                </a>
                <a target="_blank" href={socilaMedia.linkedin}>
                  <FaLinkedin
                    size={"100%"}
                    className="h-10 mr-4"
                    fill="white"
                  />
                </a>
                <a target="_blank" href={socilaMedia.medium}>
                  <FaMedium size={"100%"} className="h-10 mr-4" fill="white" />
                </a>
                <a target="_blank" href={socilaMedia.twitter}>
                  <FaTwitterSquare
                    size={"100%"}
                    className="h-10 mr-4"
                    fill="white"
                  />
                </a>
              </div> */}
            </div>
          </nav>
        </div>
      </nav>
    </>
  );
};
