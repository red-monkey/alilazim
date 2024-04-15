"use client";
import { useElementOnScreen } from "@/hooks/useElementOnScreen";
import React, { LegacyRef } from "react";
import { VenturesItem } from "..";
import Link from "next/link";
import { venturesDatas } from "@/common/data/datas";

type Props = {};

export const HomePageVentures = (props: Props) => {
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
        My Ventures
      </h1>
      <div
        className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 w-full "
        style={{
          paddingLeft: "5%",
          paddingRight: "5%",
        }}
      >
        {venturesDatas.map(
          (venturesData, index) =>
            index < 4 && (
              <VenturesItem
                key={index}
                id={venturesData.id}
                title={venturesData.title}
                description={venturesData.description}
                type={venturesData.type}
                client={venturesData.client}
                subtitle={venturesData.subtitle}
                subdescription={venturesData.subdescription}
                coverImage={venturesData.coverImage}
                images={venturesData.images}
              />
            )
        )}
      </div>
      <Link
        ref={item2Ref as LegacyRef<HTMLAnchorElement>}
        style={{
          opacity: item2IsVisible ? 1 : 0,
          transition: "opacity 2s ease",
        }}
        className="w-fit h-fit px-6 py-2 bg-black text-white  text-center  flex items-center justify-center mt-10 sm:text-xl text-base"
        href="/ventures"
      >
        ALL VENTURES
      </Link>
    </div>
  );
};
