"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiArrowRight } from "react-icons/hi2";

type Props = {
  id: string;
  title: string;
  description: string;
  type: string;
  client: string;
  subtitle: string;
  subdescription: object[];
  coverImage: string;
  images: string[];
};

export const VenturesListItem: React.FC<Props> = (props: Props) => {
  const [itemHovered, setItemHovered] = useState(false);

  const scaleValue = (
    value: any,
    min: any,
    max: any,
    newMin: any,
    newMax: any
  ) => {
    const clampedValue = Math.min(Math.max(value, min), max);
    return ((clampedValue - min) / (max - min)) * (newMax - newMin) + newMin;
  };

  const [scaledX, setScaledX] = useState();
  const [scaledRot, setScaledRot] = useState();

  // Event handler for mouse move
  const handleMouseMove = (e: any) => {
    const mouseX = e.clientX;

    // Scale mouseX between -20 and 20
    setScaledX(scaleValue(mouseX, 0, window.innerWidth, -20, 20));
    setScaledRot(scaleValue(mouseX, 0, window.innerWidth, -3, 3));
  };

  useEffect(() => {
    console.log(scaledX);
  }, [scaledX]);
  return (
    <Link
      href={`ventures/${props.id}`}
      className="w-full flex justify-between relative flex-col-reverse z-20"
      onMouseEnter={() => setItemHovered(true)}
      onMouseLeave={() => setItemHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <div
        style={{
          backgroundColor: "#000000",
          position: "absolute",
          maxHeight: itemHovered ? "100%" : "0%",
          width: "100%",
          height: "100%",
          transition: "max-height 0.5s ease",
          zIndex: -99,
        }}
      />
      <div
        className="flex flex-row w-full items-center justify-between h-full  "
        style={{
          paddingLeft: itemHovered ? "2rem" : "0rem",
          paddingRight: itemHovered ? "2rem" : "0rem",
          paddingTop: "2rem",
          paddingBottom: "2rem",
          transition: "padding 0.5s ease",
        }}
      >
        <div className="flex items-center h-full">
          <div
            className="w-2 h-2  mr-4"
            style={{
              borderRadius: 40,
              backgroundColor: itemHovered ? "#ffffff" : "#000000",
            }}
          />
          <h2
            className=" font-medium sm:text-4xl text-2xl"
            style={{ color: itemHovered ? "#ffffff" : "#000000" }}
          >
            {props.title}
          </h2>
        </div>
        <div>
          <div
            className="sm:w-14 w-10 sm:h-14 h-10 bg-black flex items-center justify-center border-white border"
            style={{ borderRadius: 99 }}
          >
            <HiArrowRight
              style={{
                backgroundColor: "#000000",
                color: "#ffffff",
                width: "50%",
                height: "50%",

                transform: itemHovered
                  ? "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-45deg) skew(0deg, 0deg)"
                  : "",
                transition: "transform 0.3s ease",
              }}
            />
          </div>
        </div>
      </div>
      <div
        className=" absolute -z-50 hidden sm:flex"
        style={{
          width: "20vw",
          height: "45vh",
          top: itemHovered ? "-50%" : "100%",
          transform: `translate3d(${scaledX}%, 0%, 0px) scale3d(1, 1.2, 1) rotateX(0deg) rotateY(0deg) rotateZ(${scaledRot}deg) skew(0deg, 0deg)`, // Apply the dynamic transform
          opacity: itemHovered ? "1" : "0",

          right: "25%",
          transition: "top 0.5s ease, opacity 0.5s ease, transform 0s ease",
        }}
      >
        <Image
          src={require(`../../common/images/${props.coverImage}`)}
          alt=""
          className="w-full h-full grayscale "
        />
      </div>
    </Link>
  );
};
