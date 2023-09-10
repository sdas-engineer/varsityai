"use client";
import Button from "@/components/Shared/Buttons/Button";
import React from "react";
import { BsCheckLg } from "react-icons/bs";
import { Fade, Slide } from "react-awesome-reveal";
const ProCard = () => {
  const proFeatures = [
    "Unlimited Documents",
    "Unlimited Queries",
    "Faster Response",
    "Collaborative Workspace",
    "Early Access to Updates",
  ];
  return (
    <Slide triggerOnce className="w-full flex items-center justify-center" direction="up">
      <div className="md:w-[80%] w-full flex flex-col items-start justify-start gap-10 py-10 px-12 relative rounded-[30px]  pro-card shadow-yellow">
        <div className="w-full flex flex-col items-start justify-start gap-4">
          <h3 className="text-black-main/70 text-2xl font-bold">Pro </h3>
          <p className="text-lg text-black-main/70 font-normal">
            Full featured
          </p>
        </div>
        <div className="w-full flex flex-col items-start justify-start gap-4">
          <h2 className="text-brand-tartary text-[56px] leading-[64px] font-bold">
            $10
          </h2>
          <p className="text-black-main/60 text-lg font-normal">
            per month
          </p>
        </div>
        <hr className="w-full h-[2px] text-white/30" />
        <div className="w-full flex flex-col items-start justify-start gap-4">
          {proFeatures.map((item: any, index: number) => (
            <div
              key={index}
              className="w-full flex items-center justify-start gap-2"
            >
              <BsCheckLg className="text-brand-tartary text-2xl" />
              <p className="text-lg text-black-main font-medium ">{item}</p>
            </div>
          ))}
        </div>
        <Button
          route="/dashboard"
          text="Subscribe for Pro"
          styles="bg-gradient-to-r from-brand-main to-brand-secondary text-white cursor-pointer text-brand-tartary w-full h-[50px] after:absolute after:h-full after:rounded-[17px] after:w-0 after:left-0 after:top-0 after:z-10 after:bg-white/30  hover:after:w-full hover:after:duration-300"
          shadow="shadow-main"
        />
      </div>
    </Slide>
  );
};

export default ProCard;
