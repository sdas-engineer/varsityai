"use client";
import React from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import Image from "next/image";
import Button from "../Shared/Buttons/Button";
import { Fade, Slide } from "react-awesome-reveal";
import { useAuth } from "@clerk/nextjs";
const HeroSection = () => {
  const { isSignedIn } = useAuth();
  return (
    <ComponentWrapper
      id="hero"
      style="w-full min-h-[calc(100vh-80px)] flex items-center py-10 lg:py-0"
    >
      <div className="w-full h-full grid lg:grid-cols-2 lg:gap-0 gap-8 place-items-center">
        <Fade triggerOnce className="w-full flex items-center justify-center">
          <aside className="sm:w-[70%] w-full flex flex-col items-start justify-start gap-4">
            <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-bold text-black-main">
              Your AI Academic Research Assistant
            </h1>
            <p className="text-lg text-black-main/70 font-normal">
              VarsityAI is a tool to help academic researchers save hundreds of
              hours by eliminating endless manual searches to find relevant
              information. Our AI answers complicated queries in seconds
              simplifying the process of digesting complex academic literature,
              making research workflow more efficient and collaborative.{" "}
            </p>
            {isSignedIn ? (
              <Button
              route="/dashboard"
              text=" Upload Document"
              icon
            />
            ) : (
              <Button
              route="/sign-in"
              text=" Start For Free"
              icon
            />
            )}
          </aside>
        </Fade>
        <Slide
          direction="up"
          triggerOnce
          className="w-full flex items-center justify-center"
        >
          <aside className="lg:w-full sm:w-[70%] w-full h-[490px] relative">
            <Image
              className="w-full h-full object-cover"
              src={"/Assets/Hero.webp"}
              alt=""
              fill
            />
          </aside>
        </Slide>
      </div>
    </ComponentWrapper>
  );
};

export default HeroSection;
