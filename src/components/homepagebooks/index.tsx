"use client";
import { useElementOnScreen } from "@/hooks/useElementOnScreen";
import React, { LegacyRef } from "react";
import Image from "next/image";
import { booksData } from "@/common/data/datas";

type Props = {};

export const HomePageBooks = (props: Props) => {
  const [itemRef, itemIsVisible] = useElementOnScreen();
  const [item2Ref, item2IsVisible] = useElementOnScreen();

  return (
    <div className="sm:mb-40 mb-20 w-full flex flex-col items-center">
      <h1
        ref={itemRef as LegacyRef<HTMLHeadingElement>}
        style={{
          opacity: itemIsVisible ? 1 : 0,
          transition: "opacity 2s ease",
        }}
        className="text-center  font-semibold sm:text-5xl text-3xl  "
      >
        My Books
      </h1>
      <div
        className="w-full"
        style={{
          paddingLeft: "5%",
          paddingRight: "5%",
        }}
      >
        {booksData.map((bookData, index) => (
          <a
            key={index}
            href={bookData.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col sm:flex-row w-full h-fit items-center justify-between mt-10 grayscale hover:grayscale-0 transition-all duration-500"
            style={{
              opacity: item2IsVisible ? 1 : 0,
              transition: "opacity 2s ease",
            }}
            ref={item2Ref as LegacyRef<HTMLAnchorElement>}
            download
          >
            <Image
              src={bookData.imageURL}
              width={1000}
              height={1000}
              alt={bookData.title}
              className="w-full sm:w-[40%] h-[30rem] object-contain"
            />
            <div className="w-full sm:w-[55%] mt-5 sm:mt-0">
              <h1 className="text-lg font-bold mb-3 text-center">
                {bookData.title}
              </h1>
              {bookData.description.map((desc, index) => (
                <>
                  <p key={index} className="text-sm font-light">
                    {desc}
                  </p>
                  <br />
                </>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
