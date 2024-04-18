"use client";
import { useElementOnScreen } from "@/hooks/useElementOnScreen";
import Link from "next/link";
import React, { LegacyRef, useState } from "react";
import Image from "next/image";

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

export const VenturesItem: React.FC<Props> = (props: Props) => {
  const [hoveredItem, setHoveredItem] = useState(false);

  const handleMouseEnter = () => {
    setHoveredItem(true);
  };

  const handleMouseLeave = () => {
    setHoveredItem(false);
  };

  const grayscaleItem = {
    filter: hoveredItem ? "grayscale(0%)" : "grayscale(100%)",
    transition: "filter 0.5s ease",
  };

  const [itemRef, itemIsVisible] = useElementOnScreen();

  return (
    <div
      ref={itemRef as LegacyRef<HTMLDivElement>}
      style={{
        opacity: itemIsVisible ? 1 : 0,
        transition: "opacity 2s ease",
      }}
      className={`sm:w-full w-full sm:my-20 my-10 sm:px-5 px-0 ${
        Number(props.id) % 2 === 0 ? " pt-14" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={{
          pathname: `/ventures/${props.id}`,
        }}
        className="w-full"
      >
        <div className="w-full h-auto h-VenturesItem border">
          <Image
            src={props.coverImage}
            alt=""
            className="w-full h-full  object-fill"
            width={1000}
            height={1000}
            style={grayscaleItem}
          />
        </div>
        <h1 className="sm:text-4xl text-2xl font-medium my-4">{props.title}</h1>
        <div className="w-fit h-fit px-2 py-1 bg-black text-white text-base text-center  flex items-center justify-center uppercase">
          {props.type}
        </div>
        <p className="sm:text-2xl text-xl mt-4">{props.description}</p>
      </Link>
    </div>
  );
};
