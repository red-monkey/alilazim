"use client";
import {
  VenturesDetailsImgItem,
  GetInTouch,
  Venturesdetailsdescriptiontext,
} from "@/components";
import { useElementOnScreen } from "@/hooks/useElementOnScreen";
import Image from "next/image";
import React, { LegacyRef, useState } from "react";
import { HiChevronLeft, HiChevronRight, HiMiniXMark } from "react-icons/hi2";
import { useParams } from "next/navigation";
import { venturesDatas } from "@/common/data/datas";

type Props = {};

const VenturesDetails: React.FC<Props> = (props: Props) => {
  const params = useParams<{ id: string }>();

  const venturesData = venturesDatas.find(
    (venturesData) => venturesData.id === params.id
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

  const [itemRef, itemIsVisible] = useElementOnScreen();
  const [item2Ref, item2IsVisible] = useElementOnScreen();
  const [item3Ref, item3IsVisible] = useElementOnScreen();
  const [item4Ref, item4IsVisible] = useElementOnScreen();

  return (
    <div className="sm:pt-24 pt-12">
      <div style={{ paddingLeft: "5%", paddingRight: "5%" }}>
        <div
          ref={itemRef as LegacyRef<HTMLDivElement>}
          style={{
            opacity: itemIsVisible ? 1 : 0,
            transition: "opacity 2s ease",
          }}
          className="mt-20 sm:mb-20 mb-10 sm:w-3/5 w-full sm:ml-auto sm:mr-auto"
        >
          <h4 className="text-center  font-medium text-l sm:mb-5 mb-2 text-gray-500">
            {venturesData?.type}
          </h4>
          <h1 className="text-center  font-semibold sm:text-8xl text-4xl mb-5">
            {venturesData?.title}
          </h1>
          <p className="text-center  font-normal sm:text-2xl text-xl">
            {venturesData?.description}
          </p>
        </div>
        <div
          ref={item2Ref as LegacyRef<HTMLDivElement>}
          style={{
            opacity: item2IsVisible ? 1 : 0,
            transition: "opacity 2s ease",
          }}
          className="w-full items-center justify-center flex flex-col sm:mb-40 mb-20"
        >
          <div className="h-[35rem] sm:w-2/3 w-full mb-10">
            <Image
              src={venturesData?.coverImage}
              width={1000}
              height={1000}
              alt=""
              className="object-fill  w-full h-full  border-4 rounded-lg"
            />
          </div>
          <div className="flex flex-row sm:w-2/3 w-full items-center justify-around">
            <div className="flex flex-col w-1/2 items-center">
              <h4 className="text-center text-sm font-medium uppercase text-gray-600 mb-2">
                client
              </h4>
              <h3 className="text-center sm:text-3xl text-xl font-medium  text-gray-600">
                {venturesData?.client}
              </h3>
            </div>
            <div className="flex flex-col w-1/2 items-center">
              <h4 className="text-center text-sm font-medium uppercase text-gray-600 mb-2">
                SERVICE
              </h4>
              <h3 className="text-center sm:text-3xl text-xl font-medium  text-gray-600">
                {venturesData?.type}
              </h3>
            </div>
          </div>
        </div>
        <div className="w-full items-center justify-center flex sm:mb-40 mb-20">
          <div className="sm:w-3/5 w-full">
            <h1
              className="sm:text-5xl text-2xl font-medium mb-5"
              ref={item3Ref as LegacyRef<HTMLHeadingElement>}
              style={{
                opacity: item3IsVisible ? 1 : 0,
                transition: "opacity 2s ease",
              }}
            >
              {venturesData?.subtitle}
            </h1>
            {venturesData?.subdescription.map((subdescription, index) => (
              <Venturesdetailsdescriptiontext
                key={index}
                subdescription={subdescription}
              />
            ))}
          </div>
        </div>
        {venturesData?.images[0] ? (
          <div className="w-full items-center justify-center flex flex-col mb-40">
            <h3
              className="font-medium sm:text-xl text-sm uppercase text-gray-600 mb-10"
              ref={item4Ref as LegacyRef<HTMLHeadingElement>}
              style={{
                letterSpacing: 2,
                opacity: item4IsVisible ? 1 : 0,
                transition: "opacity 2s ease",
              }}
            >
              gallery
            </h3>
            <div className="sm:w-3/4 w-full grid sm:grid-cols-2 grid-cols-1  gap-10">
              {venturesData?.images.map((image: any, index: number) => (
                <VenturesDetailsImgItem key={index} imgURL={image} />
              ))}
            </div>
          </div>
        ) : (
          <></>
        )}
        {/*  <div
          className="fixed  top-0 bottom-0 right-0 left-0  cursor-default z-50 "
          role="button"
          onClick={handleClick}
          style={galleryBgTransition}
        >
          <div className="flex flex-col   h-full ">
            <div className="absolute top-0 right-0 m-5">
              <HiMiniXMark
                size={"4rem"}
                style={{ opacity: 0.7, color: "#ffffff", cursor: "pointer" }}
              />
            </div>
            <div className="flex  h-full justify-between items-center">
              <div className="sm:flex hidden">
                <HiChevronLeft
                  size={"4rem"}
                  style={{ opacity: 0.7, color: "#ffffff", cursor: "pointer" }}
                  onClick={(e) => handlePreviousImage(e)}
                />
              </div>
              <div className="bg-white sm:w-3/5 w-full sm:h-2/3 h-1/2 cursor-default">
                <Image
                  className="object-cover w-full h-full"
                  src={require(`../../../common/images/${images[selectedImg]}`)}
                  alt=""
                />
              </div>
              <div className="sm:flex hidden">
                <HiChevronRight
                  size={"4rem"}
                  style={{ opacity: 0.7, color: "#ffffff", cursor: "pointer" }}
                  onClick={(e) => handleNextImage(e)}
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="overflow-x-auto overflow-y-hidden flex  pb-5  whitespace-nowrap">
                {images.map((image: any, index: number) => (
                  <div
                    key={index} // Don't forget to add a unique key for each child element in the map function
                    style={{
                      height: "10vh",
                      width: "10vh",
                      margin: 10,
                      cursor: "pointer",
                      opacity: selectedImg === index ? 0.3 : 1,
                      flex: "0 0 auto", // Allow the container to shrink and grow as needed
                    }}
                    onClick={(e) => handleSelectImg(e, index)}
                  >
                    <Image
                      alt=""
                      src={require(`../../../common/images/${image}`)}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <GetInTouch />
    </div>
  );
};

export default VenturesDetails;
