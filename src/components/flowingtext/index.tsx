"use client";
import { useElementOnScreen } from "@/hooks/useElementOnScreen";
import React, { LegacyRef } from "react";
import { flowingTextData } from "@/common/data/datas";

type Props = {};

export const FlowingText: React.FC<Props> = (props: Props) => {
  const [item1Ref, item1IsVisible] = useElementOnScreen();
  const [item2Ref, item2IsVisible] = useElementOnScreen();
  return (
    <div className="sm:mb-40 mb-20">
      <div
        ref={item1Ref as LegacyRef<HTMLDivElement>}
        style={{
          opacity: item1IsVisible ? 1 : 0,
          transition: "opacity 2s ease",
        }}
        className="flex overflow-hidden border-b border-t border-black  py-4 whitespace-nowrap "
      >
        <div className="looping-text-left">
          {flowingTextData.flowingTextLeftData.map((data, index) => (
            <React.Fragment key={index}>
              <div className="uppercase sm:text-5xl text-3xl font-sans">
                {data}
              </div>
              <div className="w-16 h-1 bg-black mx-8" />
            </React.Fragment>
          ))}
        </div>
        <div className="looping-text-left">
          {flowingTextData.flowingTextLeftData.map((data, index) => (
            <React.Fragment key={index}>
              <div className="uppercase sm:text-5xl text-3xl font-sans">
                {data}
              </div>
              <div className="w-16 h-1 bg-black mx-8" />
            </React.Fragment>
          ))}
        </div>
      </div>
      <div
        ref={item2Ref as LegacyRef<HTMLDivElement>}
        style={{
          opacity: item2IsVisible ? 1 : 0,
          transition: "opacity 2s ease",
        }}
        className="flex overflow-hidden border-b border-black  py-4 whitespace-nowrap "
      >
        <div className="looping-text-right">
          {flowingTextData.flowingTextRightData.map((data, index) => (
            <React.Fragment key={index}>
              <div className="w-16 h-1 bg-black mx-8" />
              <div className="uppercase sm:text-5xl text-3xl font-sans">
                {data}
              </div>
            </React.Fragment>
          ))}
        </div>
        <div className="looping-text-right">
          {flowingTextData.flowingTextRightData.map((data, index) => (
            <React.Fragment key={index}>
              <div className="w-16 h-1 bg-black mx-8" />
              <div className="uppercase sm:text-5xl text-3xl font-sans">
                {data}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
