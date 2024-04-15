"use client";
import { useElementOnScreen } from "@/hooks/useElementOnScreen";
import Image from "next/image";
import React, { LegacyRef } from "react";

type Props = {
  imgURL: string;
};

export const VenturesDetailsImgItem: React.FC<Props> = (props: Props) => {
  const [itemRef, itemIsVisible] = useElementOnScreen();
  return (
    <div
      ref={itemRef as LegacyRef<HTMLDivElement>}
      className="w-full h-full border-4 rounded-lg"
      style={{
        opacity: itemIsVisible ? 1 : 0,
        transition: "opacity 2s ease",
      }}
    >
      <Image
        className="object-fill w-full h-full"
        src={require(`../../common/images/${props.imgURL}`)}
        alt=""
      />
    </div>
  );
};
