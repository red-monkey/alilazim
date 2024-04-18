"use client";
import { useElementOnScreen } from "@/hooks/useElementOnScreen";
import React, { LegacyRef, useEffect, useRef, useState } from "react";
import { contactData } from "@/common/data/datas";

import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import { AiOutlineLoading } from "react-icons/ai";
import "react-toastify/dist/ReactToastify.css";

type Props = {};

const Contact: React.FC = (props: Props) => {
  const [itemRef, itemIsVisible] = useElementOnScreen();

  const [loading, setLoading] = useState(false);
  const form: any = useRef(null);

  const sendEmail = (e: any) => {
    setLoading(true);
    e.preventDefault();

    emailjs
      .sendForm("service_mvfnfxk", "template_4fh63lh", form.current, {
        publicKey: "3ixGolKf18Zr2uHEU",
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
        }),
          setLoading(false);
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
          }),
          setLoading(false);
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
            required
          />
        </div>
        <div className="flex flex-col w-full mb-5">
          <label className="sm:text-xl text-base font-normal mb-2">Email</label>
          <input
            name="user_email"
            placeholder="Email"
            className="h-auto sm:min-h-11 min-h-7 border-black border bg-white text-black mb-0 sm:pt-4 pt-2 sm:pb-4 pb-2 sm:pl-6 pl-3 sm:pr-6 pr-3 text-base w-full"
            required
            inputMode="email"
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
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-black text-center sm:pl-6 pl-3 sm:pr-6 pr-3 sm:pt-3 pt-1 sm:pb-3 pb-1 sm:text-xl text-base text-white mb-5"
          disabled={loading}
        >
          {loading ? (
            <AiOutlineLoading className="animate-spin ml-auto mr-auto" />
          ) : (
            "SUBMIT"
          )}
        </button>
      </form>
    </div>
  );
};

export default Contact;
