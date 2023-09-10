"use client";
import Button from "@/components/Shared/Buttons/Button";
import React from "react";
import { BsCheckLg } from "react-icons/bs";
import { Fade, Slide } from "react-awesome-reveal";

const FreeCard = () => {
  const freeFeatures = [
    "2 Documents",
    "15 Queries Per Day",
    "Regular Updates",
  ];
  return (
    <Slide className="w-full flex items-center justify-center" triggerOnce direction="up">
      <div className="md:w-[80%] w-full flex flex-col items-start justify-start gap-10 py-8 px-12 bg-gradient-to-br from-brand-main to-brand-secondary rounded-[30px]">
        <div className="w-full flex flex-col items-start justify-start gap-4">
          <h3 className="text-white text-2xl font-bold">Free </h3>
          <p className="text-lg text-white/80 font-normal">
            Perfect for getting started.
          </p>
        </div>
        <div className="w-full flex flex-col items-start justify-start gap-4">
          <h2 className="text-white text-[56px] leading-[64px] font-bold">
            $0
          </h2>
          <p className="text-white/80 text-lg font-normal">free forever</p>
        </div>
        <hr className="w-full h-[2px] text-white/30" />
        <div className="w-full flex flex-col items-start justify-start gap-4">
          {freeFeatures.map((item: any, index: number) => (
            <div
              key={index}
              className="w-full flex items-center justify-start gap-2"
            >
              <BsCheckLg className="text-white text-2xl" />
              <p className="text-lg text-white font-medium ">{item}</p>
            </div>
          ))}
        </div>
        <Button
          text="Get Started for Free"
          route="/dashboard"
          styles="bg-white text-brand-tartary w-full h-[50px] hover:bg-white/60 hover:duration-300"
          shadow="shadow-lg"
        />
      </div>
    </Slide>
  );
};

export default FreeCard;
