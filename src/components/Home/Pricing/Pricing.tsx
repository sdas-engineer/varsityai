"use client";
import Button from "@/components/Shared/Buttons/Button";
import ComponentWrapper from "@/components/Shared/Wrappers/ComponentWrapper";
import React from "react";
import FreeCard from "./FreeCard";
import ProCard from "./ProCard";
import { Fade, Slide } from "react-awesome-reveal";
const Pricing = () => {
  return (
    <ComponentWrapper id="pricing" style="lg:py-16 py-10">
      <div className="w-full h-full flex flex-col items-center justify-start gap-10">
        <Fade className="w-full flex items-center justify-center" triggerOnce>
          <div className="lg:w-[60%] w-full flex flex-col items-center justify-start gap-5">
            <h3 className="text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-bold text-black-main text-center">
              Simple Pricing
            </h3>
            <p className="text-black-main/90 text-center text-lg font-normal">
              Start for free and scale with the Pro plan. With VarsityAI, you
              can focus on your analysis instead of research.
            </p>
          </div>
        </Fade>

        <div className="w-full grid lg:grid-cols-2 place-items-center lg:gap-0 gap-10">
          <FreeCard />
          <ProCard />
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Pricing;
