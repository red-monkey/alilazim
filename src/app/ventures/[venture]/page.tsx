//"use client";
import {
  VenturesDetailsImgItem,
  GetInTouch,
  Venturesdetailsdescriptiontext,
  VenturesDetailsItem,
} from "@/components";
import { useElementOnScreen } from "@/hooks/useElementOnScreen";
import Image from "next/image";
import React, { LegacyRef, useState } from "react";
import { HiChevronLeft, HiChevronRight, HiMiniXMark } from "react-icons/hi2";
//import { useParams } from "next/navigation";
import { venturesDatas } from "@/common/data/datas";

type Props = {};

export function generateStaticParams() {
  let venturesReturn: object[] = [];
  venturesDatas.map((ventures, index) =>
    venturesReturn.push({ venture: ventures.id })
  );
  return venturesReturn;
}

const VenturesDetails = async ({ params }: { params: { venture: string } }) => {
  //  const params = useParams<{ id: string }>();

  const venturesData = venturesDatas.find(
    (venturesData) => venturesData.id === params.venture
  );

  /* const [galleryIsOpen, setGalleryIsOpen] = useState(false);
  const galleryBgTransition = {
    backgroundColor: "rgba(0, 0, 0, .9)",
    opacity: galleryIsOpen ? "1" : "0",
    transition: "transform 0.3s ease",
    display: galleryIsOpen ? "" : "none",
  };
  const handleClick = () => {
    setGalleryIsOpen(!galleryIsOpen);
  };


  const [selectedImg, setSelectedImg] = useState(0);

  const handleSelectImg = (event: any, index: any) => {
    event.stopPropagation();
    setSelectedImg(index);
  };

  const handleNextImage = (event: any) => {
    event.stopPropagation();
    setSelectedImg((prevImg) =>
      prevImg !== images.length - 1 ? prevImg + 1 : prevImg
    );
  };
  const handlePreviousImage = (event: any) => {
    event.stopPropagation();
    setSelectedImg((prevImg) => (prevImg !== 0 ? prevImg - 1 : prevImg));
  }; */

  /*   const [itemRef, itemIsVisible] = useElementOnScreen();
  const [item2Ref, item2IsVisible] = useElementOnScreen();
  const [item3Ref, item3IsVisible] = useElementOnScreen();
  const [item4Ref, item4IsVisible] = useElementOnScreen(); */

  return (
    <div className="sm:pt-24 pt-12">
      <VenturesDetailsItem venturesData={venturesData} />
      <GetInTouch />
    </div>
  );
};

export default VenturesDetails;
