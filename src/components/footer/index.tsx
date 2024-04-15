"use client";
import { useElementOnScreen } from "@/hooks/useElementOnScreen";
import Link from "next/link";
import React, { LegacyRef } from "react";
import { footerData } from "@/common/data/datas";

type Props = {};

export const Footer: React.FC = (props: Props) => {
  const [itemRef, itemIsVisible] = useElementOnScreen();
  return (
    <div
      ref={itemRef as LegacyRef<HTMLDivElement>}
      style={{
        opacity: itemIsVisible ? 1 : 0,
        transition: "opacity 2s ease",
      }}
      className="flex overflow-hidden flex-col items-center justify-center mb-5"
    >
      <Link href="/">
        <h1 className="font-medium text-3xl mb-10">{footerData.title}</h1>
      </Link>
      <div className="flex w-screen  justify-center items-center border-t border-b border-black pt-2 pb-2">
        <Link className="pl-6 pr-6 pt-3 pb-3" href="/">
          HOME
        </Link>
        <Link className="pl-6 pr-6 pt-3 pb-3" href="/ventures">
          VENTURES
        </Link>
        <Link className="pl-6 pr-6 pt-3 pb-3" href="/about">
          ABOUT
        </Link>
        <Link className="pl-6 pr-6 pt-3 pb-3" href="/contact">
          CONTACT
        </Link>
      </div>
    </div>
  );
};
