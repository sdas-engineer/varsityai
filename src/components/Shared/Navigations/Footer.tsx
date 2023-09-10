"use client";
import React from "react";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  const year = new Date().getFullYear();
  const openGmail = () => {
    window.location.href = "mailto:info@varsityai.co";
  };
  return (
    <footer className="w-full flex sm:flex-row flex-col items-center justify-between gap-6 sm:py-10 py-5 border-t-2 px-5">
      <p className="text-black-main/70 text-base font-medium">
        © {year} VarsityAI Limited. All Rights reserved
      </p>
      <HiOutlineMail
        onClick={openGmail}
        className="text-[24px] text-brand-tartary cursor-pointer"
      />
    </footer>
  );
};

export default Footer;
