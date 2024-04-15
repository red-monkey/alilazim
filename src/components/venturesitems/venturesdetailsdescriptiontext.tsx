"use client";
import { useElementOnScreen } from "@/hooks/useElementOnScreen";
import React, { LegacyRef } from "react";

type Props = {
  subdescription: {
    title: string;
    description: string;
  };
};

export const Venturesdetailsdescriptiontext = (props: Props) => {
  const [itemRef, itemIsVisible] = useElementOnScreen();
  return (
    <>
      <p
        ref={itemRef as LegacyRef<HTMLParagraphElement>}
        className="sm:text-2xl text-xl font-normal text-gray-600 mb-5"
        style={{
          opacity: itemIsVisible ? 1 : 0,
          transition: "opacity 2s ease",
        }}
      >
        <b>{props.subdescription.title} </b>
        {props.subdescription.description}
      </p>
    </>
  );
};
