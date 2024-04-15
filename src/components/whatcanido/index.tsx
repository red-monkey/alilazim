"use client";
import { useElementOnScreen } from "@/hooks/useElementOnScreen";
import Image from "next/image";
import React, { LegacyRef, useState } from "react";
import { whatCanIdoData } from "@/common/data/datas";
type Props = {};

export const WhatICanDo = (props: Props) => {
  const [itemRef, itemIsVisible] = useElementOnScreen();
  const [selectedOption, setSelectedOption] = useState(0);
  return (
    <div
      className="sm:mb-40 mb-20"
      ref={itemRef as LegacyRef<HTMLDivElement>}
      style={{
        opacity: itemIsVisible ? 1 : 0,
        transition: "opacity 2s ease",
        paddingLeft: "5%",
        paddingRight: "5%",
      }}
    >
      <h1 className="text-center  font-semibold sm:text-5xl text-3xl">
        Areas of Expertise
      </h1>
      <div className="flex sm:flex-row flex-col w-full  sm:py-20 py-10 items-center ">
        <div className="flex flex-col bg-dark_gray sm:w-1/2 w-4/5 sm:mr-16 h-full rounded-lg">
          {whatCanIdoData.map((item, index) => (
            <div
              className="p-5 cursor-pointer rounded-lg"
              style={{
                backgroundColor: selectedOption === index ? "#000000" : "",
              }}
              onClick={() => setSelectedOption(index)}
              key={index}
            >
              <div className="flex items-center  relative ">
                <span
                  className="w-2 h-2 bg-white absolute "
                  style={{
                    transform:
                      selectedOption === index
                        ? ""
                        : "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transition: "transform 0.3s ease",
                    borderRadius: 999,
                  }}
                />
                <h1
                  className="text-2xl text-white font-semibold"
                  style={{
                    marginLeft: selectedOption === index ? "1.25rem" : "",
                    transition: " margin 0.3s ease",
                  }}
                >
                  {item.title}
                </h1>
              </div>
              <div
                style={{
                  maxHeight: selectedOption === index ? 250 : "0",

                  transition: "max-height 1s ease",
                  overflow: "hidden",
                }}
              >
                <p className="text-base text-white">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex sm:w-1/2 w-full sm:ml-16 sm:mt-0 mt-10 relative items-center sm:h-h600 h-96 rounded-lg">
          {whatCanIdoData.map((item, index) => (
            <Image
              key={index}
              src={whatCanIdoData[index].img}
              alt=""
              style={{
                position: "absolute",
                filter: "grayscale(100%)",
                width: "100%",
                height: "100%",
                objectFit: "fill",
                opacity: selectedOption === index ? 1 : 0,
                transition: "opacity 1s ease",
                borderRadius: "0.5rem",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
