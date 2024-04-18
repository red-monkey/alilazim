"use client";
import {
  FlowingText,
  GetInTouch,
  HomePageAbout,
  HomePageBooks,
  HomePageVentures,
  QuestionsAnswers,
} from "@/components";
import { WhatICanDo } from "@/components/whatcanido";

export default function Home() {
  return (
    <div className=" sm:pt-24 pt-12 overflow-hidden">
      <HomePageAbout />
      <FlowingText />
      <HomePageVentures />
      <WhatICanDo />
      <HomePageBooks />
      <QuestionsAnswers />
      <GetInTouch />
    </div>
  );
}
