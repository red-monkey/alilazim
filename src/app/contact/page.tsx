"use client";
import { useElementOnScreen } from "@/hooks/useElementOnScreen";
import React, { LegacyRef, useEffect, useRef } from "react";
import { contactData, socilaMedia } from "@/common/data/datas";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {};

const Contact: React.FC = (props: Props) => {
  const [itemRef, itemIsVisible] = useElementOnScreen();

  const form: any = useRef(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm("service_cyqzgaq", "template_jrs2vbs", form.current, {
        publicKey: "sG3opKK3KjujlSdTO",
      })
      .then(() => {
        toast.success("email sent succesfully!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "colored",
        });
      })
      .catch((error) => {
        console.log(error),
          toast.error("error occured while sending email!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "colored",
          });
      });
  };

  return (
    <div
      ref={itemRef as LegacyRef<HTMLDivElement>}
      style={{
        opacity: itemIsVisible ? 1 : 0,
        transition: "opacity 2s ease",
      }}
      className="w-full  sm:pt-24 pt-12"
    >
      <ToastContainer />
      <div className="mt-20  sm:mb-8 mb-4">
        <h1 className="text-center  font-semibold sm:text-8xl text-4xl">
          {contactData.title}
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center sm:px-[25%] px-5 sm:mb-8 mb-4">
        <p className="font-normal sm:text-2xl text-xl text-center ">
          {contactData.description}
        </p>
      </div>
      <div className="w-full flex items-center justify-center sm:mb-20 mb-10">
        <a target="_blank" href={socilaMedia.github} rel="noopener noreferrer">
          <FaGithubSquare size={"100%"} className="h-10 mr-4" />
        </a>
        <a target="_blank" href={socilaMedia.linkedin}>
          <FaLinkedin size={"100%"} className="h-10 mr-4" />
        </a>
        <a target="_blank" href={socilaMedia.medium}>
          <FaMedium size={"100%"} className="h-10 mr-4" />
        </a>
        <a target="_blank" href={socilaMedia.twitter}>
          <FaTwitterSquare size={"100%"} className="h-10 mr-4" />
        </a>
        <a target="_blank" href={socilaMedia.website}>
          <TbWorld size={"100%"} className="h-10" />
        </a>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full flex flex-col items-center justify-center sm:max-w-3xl max-w-xs ml-auto mr-auto sm:mb-40 mb-20"
      >
        <div className="flex flex-col w-full mb-5 ">
          <label className="sm:text-xl text-base font-normal mb-2">
            Full Name
          </label>
          <input
            name="user_name"
            placeholder="Full Name"
            className="h-auto sm:min-h-11 min-h-7 border-black border bg-white text-black mb-0 sm:pt-4 pt-2 sm:pb-4 pb-2 sm:pl-6 pl-3 sm:pr-6 pr-3 text-base  w-full"
          />
        </div>
        <div className="flex flex-col w-full mb-5">
          <label className="sm:text-xl text-base font-normal mb-2">Email</label>
          <input
            name="user_email"
            placeholder="Email"
            className="h-auto sm:min-h-11 min-h-7 border-black border bg-white text-black mb-0 sm:pt-4 pt-2 sm:pb-4 pb-2 sm:pl-6 pl-3 sm:pr-6 pr-3 text-base w-full"
          />
        </div>
        <div className="flex flex-col w-full mb-5">
          <label className="sm:text-xl text-base font-normal mb-2">
            Message
          </label>
          <textarea
            name="message"
            placeholder="Your Message"
            className="h-auto sm:min-h-48 min-h-32 border-black border bg-white text-black mb-0 sm:pt-4 pt-2 sm:pb-4 pb-2 sm:pl-6 pl-3 sm:pr-6 pr-3 text-base w-full"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-black text-center sm:pl-6 pl-3 sm:pr-6 pr-3 sm:pt-3 pt-1 sm:pb-3 pb-1 sm:text-xl text-base text-white mb-5"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Contact;
