"use client";
import React from "react";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

interface Props {
  text: string;
  styles?: string;
  route?: string;
  icon?: boolean;
  shadow?: string;
  event?: () => void;
}

const Button: React.FC<Props> = ({
  text,
  styles = "text-white bg-gradient-to-r from-brand-main to-brand-secondary after:absolute after:h-full after:rounded-[17px] after:w-0 after:left-0 after:top-0 after:z-10 after:bg-white/30  hover:after:w-full hover:after:duration-300",
  route = "/",
  shadow = "",
  icon = false,
  event = () => {},
}: Props) => {
  return (
    <Link
      onClick={event}
      href={route}
      className={`flex items-center justify-center gap-2  text-base font-semibold  rounded-[24px]  py-[10px] px-[15px] ${styles} ${shadow} relative`}
    >
      {text}
      {icon && <AiOutlineArrowRight className="text-white text-[20px]" />}
    </Link>
  );
};

export default Button;
