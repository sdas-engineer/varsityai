"use client";
import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
interface Props {
  icon: React.ReactNode;
  title: string;
  detail: string;
}

const ServiceCard: React.FC<Props> = ({ icon, title, detail }) => {
  return (
    <Fade className="w-full" triggerOnce>
      <div className="w-full flex flex-col items-start justify-start gap-4 rounded-[17px] lg:p-6 md:p-4 p-6 relative gradient-border">
        <div className="w-full flex items-center justify-start gap-2">
          {icon}
          <h3 className="text-[22px] leading-7 text-white font-bold">
            {title}
          </h3>
        </div>
        <p className="text-white/70 text-lg font-normal">{detail}</p>
      </div>
    </Fade>
  );
};

export default ServiceCard;
