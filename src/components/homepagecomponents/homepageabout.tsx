"use client";
import { useElementOnScreen } from "@/hooks/useElementOnScreen";
import React, { LegacyRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { homePageData } from "@/common/data/datas";

type Props = {};

export const HomePageAbout: React.FC<Props> = (props: Props) => {
  const [itemRef, itemIsVisible] = useElementOnScreen();

  return (
    <div className="mt-20 sm:mb-40 mb-20">
      <h1 className="text-center  font-semibold sm:text-8xl text-4xl">
        {homePageData.title}
      </h1>
      <div className="flex justify-center mt-14 border-t border-b border-black">
        <div className="sm:w-picture w-72 border-r border-l border-black p-5">
          <Image
            src={homePageData.imageURL}
            width={500}
            height={500}
            alt=""
            className="w-full h-full object-cover "
            style={{ filter: "grayscale(100%)" }}
          />
        </div>
      </div>
      <div
        ref={itemRef as LegacyRef<HTMLDivElement>}
        style={{
          opacity: itemIsVisible ? 1 : 0,
          transition: "opacity 2s ease",
        }}
        className="flex justify-center py-10 flex-col items-center  "
      >
        <p
          className="font-normal sm:text-4xl text-2xl text-center px-5 sm:px-0 "
          style={{ maxWidth: "46rem", lineHeight: 1.5 }}
        >
          {homePageData.description}
        </p>
        <Link
          className="w-fit h-fit px-6 py-2 bg-black text-white sm:text-xl text-base text-center flex items-center justify-center mt-10"
          href="/about"
        >
          MORE ABOUT ME
        </Link>
      </div>
    </div>
  );
};
