import React from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import Image from "next/image";
const Universities = () => {
  const universities = [
    "/Assets/Universities/Cambridge.png",
    "/Assets/Universities/Wein.png",
    "/Assets/Universities/Nus.webp",
    "/Assets/Universities/Mit.webp",
  ];
  return (
    <ComponentWrapper id="universities" style="lg:py-16 py-10">
      <div className="w-full h-full flex flex-col items-center justify-start gap-[60px]">
        <h2 className="text-lg text-black text-center font-medium">
          Join top academics in saving hundreds of hours a year
        </h2>
        <div className="w-full flex sm:flex-row flex-col items-center justify-center gap-12">
          {universities.map((item: string, index: number) => (
            <div key={index} className="h-[40px] w-[140px] relative">
              <Image
                className="w-full h-full object-contain"
                src={item}
                alt=""
                fill
              />
            </div>
          ))}
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Universities;
