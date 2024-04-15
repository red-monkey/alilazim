"use client";
import { useElementOnScreen } from "@/hooks/useElementOnScreen";
import React, { LegacyRef } from "react";
import { questionsanswersData } from "@/common/data/datas";
type Props = {};

export const QuestionsAnswers: React.FC<Props> = (props: Props) => {
  const [itemRef, itemIsVisible] = useElementOnScreen();
  return (
    <div
      ref={itemRef as LegacyRef<HTMLDivElement>}
      style={{
        opacity: itemIsVisible ? 1 : 0,
        transition: "opacity 2s ease",
        paddingLeft: "5%",
        paddingRight: "5%",
      }}
      className="flex flex-col items-center sm:mb-40 mb-20"
    >
      <h1 className="text-center  font-semibold sm:text-5xl text-3xl">
        Questions/Answers
      </h1>
      <div className="sm:py-20 py-10">
        {questionsanswersData.map((item, index) => (
          <div
            key={index}
            className="flex sm:flex-row flex-col justify-center border-b border-black py-5 "
          >
            <p className="text-2xl font-bold sm:w-2/5 w-full">
              {item.question}
            </p>
            <div className="w-10 h-0.5 bg-black mx-8 mt-4 sm:opacity-100 opacity-0" />
            <p className="text-xl font-normal sm:w-3/5 w-full">{item.answer}</p>
          </div>
        ))}
      </div>
      <h1 className="font-semibold sm:text-2xl text-xl">
        Still Have Questions?
      </h1>
      <a
        className="w-fit h-fit px-6 py-2 bg-black text-white  text-center  flex items-center justify-center mt-10 sm:text-xl text-base"
        href="/contact"
      >
        CONTACT ME
      </a>
    </div>
  );
};
