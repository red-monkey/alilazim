"use client";
import { GetInTouch } from "@/components";
import { WhatICanDo } from "@/components/whatcanido";
import { useElementOnScreen } from "@/hooks/useElementOnScreen";
import Image from "next/image";
import React, { LegacyRef } from "react";
import { aboutData } from "@/common/data/datas";

const About: React.FC = () => {
  const [item1Ref, item1IsVisible] = useElementOnScreen();
  const [item2Ref, item2IsVisible] = useElementOnScreen();
  const [item3Ref, item3IsVisible] = useElementOnScreen();
  const [item4Ref, item4IsVisible] = useElementOnScreen();
  const [item5Ref, item5IsVisible] = useElementOnScreen();
  return (
    <div className="  sm:pt-24 pt-12">
      <div
        ref={item1Ref as LegacyRef<HTMLDivElement>}
        style={{
          opacity: item1IsVisible ? 1 : 0,
          transition: "opacity 2s ease",
        }}
        className="mt-20 sm:mb-20 mb-10"
      >
        <h1 className="text-center  font-semibold sm:text-8xl text-4xl">
          {aboutData.title}
        </h1>
      </div>
      <div
        ref={item2Ref as LegacyRef<HTMLDivElement>}
        style={{
          opacity: item2IsVisible ? 1 : 0,
          transition: "opacity 2s ease",
        }}
        className="flex flex-col items-center justify-center "
      >
        {aboutData.description.map((data, index) => (
          <p
            key={index}
            className="font-normal sm:text-4xl text-2xl text-center sm:mb-10 mb-5 sm:max-w-maxw46 max-w-96"
          >
            {data}
          </p>
        ))}
      </div>
      <div
        ref={item3Ref as LegacyRef<HTMLDivElement>}
        style={{
          opacity: item3IsVisible ? 1 : 0,
          transition: "opacity 2s ease",
        }}
        className="flex justify-center "
      >
        <div className="sm:w-picture w-72 flex  mb-5">
          <Image
            src={aboutData.imageURL}
            width={500}
            height={500}
            alt=""
            className="w-full h-full object-cover "
            style={{ filter: "grayscale(100%)" }}
          />
        </div>
      </div>
      <div
        ref={item4Ref as LegacyRef<HTMLDivElement>}
        style={{
          opacity: item4IsVisible ? 1 : 0,
          transition: "opacity 2s ease",
        }}
        className="flex flex-col items-center justify-center sm:mb-10 mb-5"
      >
        <h1 className="text-center  font-semibold sm:text-6xl text-3xl">
          {aboutData.professionalJourneyTitle}
        </h1>
      </div>
      <div
        ref={item4Ref as LegacyRef<HTMLDivElement>}
        style={{
          opacity: item4IsVisible ? 1 : 0,
          transition: "opacity 2s ease",
        }}
        className="flex flex-col items-center justify-center "
      >
        <p className="font-normal sm:text-4xl text-2xl text-center sm:mb-10 mb-5 sm:max-w-maxw46 max-w-96">
          {aboutData.professionalJourneyDescription}
        </p>
      </div>
      <div
        ref={item5Ref as LegacyRef<HTMLDivElement>}
        style={{
          opacity: item5IsVisible ? 1 : 0,
          transition: "opacity 2s ease",
        }}
        className="flex flex-col items-center justify-center sm:mb-10 mb-5"
      >
        <h1 className="text-center  font-semibold sm:text-6xl text-3xl">
          {aboutData.academicContributionsLanguagesTitle}
        </h1>
      </div>
      <div
        ref={item5Ref as LegacyRef<HTMLDivElement>}
        style={{
          opacity: item5IsVisible ? 1 : 0,
          transition: "opacity 2s ease",
        }}
        className="flex flex-col items-center justify-center sm:mb-10 mb-20"
      >
        <p className="font-normal sm:text-4xl text-2xl text-center sm:mb-10 mb-5 sm:max-w-maxw46 max-w-96">
          {aboutData.academicContributionsLanguagesDescription}
        </p>
      </div>
      <WhatICanDo />
      <GetInTouch />
    </div>
  );
};

export default About;
