"use client";
import { venturesDatas } from "@/common/data/datas";
import { GetInTouch, VenturesListItem } from "@/components";
import React from "react";

type Props = {};

const Work: React.FC<Props> = (props: Props) => {
  return (
    <div className="sm:pt-24 pt-12">
      <div className="mt-20 sm:mb-40 mb-20">
        <h1 className="text-center  font-semibold sm:text-8xl text-4xl">
          My Ventures
        </h1>
      </div>
      <div
        className="sm:mt-20 mt-10  sm:mb-40 mb-20 w-full"
        style={{ paddingLeft: "5%", paddingRight: "5%" }}
      >
        {venturesDatas.map((venturesData, index) => (
          <VenturesListItem
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
        ))}
      </div>
      <GetInTouch />
    </div>
  );
};

export default Work;
