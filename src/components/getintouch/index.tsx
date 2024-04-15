"use client";
import { contactData } from "@/common/data/datas";
import { useElementOnScreen } from "@/hooks/useElementOnScreen";
import Link from "next/link";
import React, { LegacyRef, useState } from "react";
import { HiArrowRight } from "react-icons/hi2";

type Props = {};

export const GetInTouch = (props: Props) => {
  const [hoveredEmailUs, setHoveredEmailUs] = useState(false);
  const [hoveredMessageUs, setHoveredMessageUs] = useState(false);

  const [itemRef, itemIsVisible] = useElementOnScreen();
  return (
    <div
      ref={itemRef as LegacyRef<HTMLDivElement>}
      style={{
        opacity: itemIsVisible ? 1 : 0,
        transition: "opacity 2s ease",
      }}
      className="sm:mb-40 mb-20"
    >
      <h1 className="text-center  font-semibold sm:text-8xl text-4xl">
        Get in Touch
      </h1>
      <div className="w-full border-t border-b border-black flex mt-16 ">
        <div
          className="w-1/2 h-full border-r border-black sm:pb-24 pb-10 sm:pl-10 pl-5 sm:pr-10 pr-5 sm:pt-5 pt-3 flex items-center justify-between"
          onClick={() =>
            (window.location.href = `mailto:${contactData.mailto}`)
          }
          role="button"
          onMouseEnter={() => setHoveredEmailUs(true)}
          onMouseLeave={() => setHoveredEmailUs(false)}
        >
          <h1 className="sm:text-3xl text-xl font-medium">Email Me</h1>
          <div
            className="sm:w-14 w-7 sm:h-14 h-7 bg-black flex items-center justify-center"
            style={{ borderRadius: 99 }}
          >
            <HiArrowRight
              style={{
                color: "#ffffff",
                width: "50%",
                height: "50%",
                transform: hoveredEmailUs
                  ? "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-45deg) skew(0deg, 0deg)"
                  : "",
                transition: "transform 0.3s ease",
              }}
            />
          </div>
        </div>
        <Link
          className="w-1/2 h-full border-black sm:pb-24 pb-10 sm:pl-10 pl-5 sm:pr-10 pr-5 sm:pt-5 pt-3 flex items-center justify-between"
          href="/contact"
          onMouseEnter={() => setHoveredMessageUs(true)}
          onMouseLeave={() => setHoveredMessageUs(false)}
        >
          <h1 className="sm:text-3xl text-xl font-medium">Message Me</h1>
          <div
            className="sm:w-14 w-7 sm:h-14 h-7 bg-black flex items-center justify-center"
            style={{ borderRadius: 99 }}
          >
            <HiArrowRight
              style={{
                backgroundColor: "#000000",
                borderRadius: 99,
                color: "#ffffff",
                width: "50%",
                height: "50%",
                transform: hoveredMessageUs
                  ? "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-45deg) skew(0deg, 0deg)"
                  : "",
                transition: "transform 0.3s ease",
              }}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};
