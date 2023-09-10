"use client";
import Link from "next/link";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import Image from "next/image";
import { Fade, Slide } from "react-awesome-reveal";

const Reasearch = () => {
  return (
    <ComponentWrapper
      id=""
      style="w-full h-full flex items-center py-10 lg:py-16"
    >
      <Slide className="w-full" triggerOnce direction="up">
        <div className="w-full h-full grid lg:grid-cols-2 lg:gap-0 gap-8 place-items-center">
          <aside className="md:w-[70%] w-full h-full flex flex-col items-start justify-start gap-4">
            <h1 className="text-3xl text-black-main font-bold">
              Summarize Your Research
            </h1>
            <p className="text-lg text-black-main/70 font-normal">
              We also helps you take notes and generates concise summaries of
              the research material. This saves you valuable time and ensures
              you never miss a crucial point.
            </p>
            <Link
              href="/dashboard"
              className="flex items-center justify-center gap-2 text-brand-tartary text-lg font-bold"
            >
              {" "}
              Get Started
              <AiOutlineArrowRight className="text-brand-tartary text-[20px]" />
            </Link>
          </aside>
          <aside className="lg:w-full md:w-[70%] w-full h-[330px] relative">
            <Image
              className="w-full h-full object-cover"
              src={"/Assets/Research.webp"}
              alt=""
              fill
            />
          </aside>
        </div>
      </Slide>
    </ComponentWrapper>
  );
};

export default Reasearch;
