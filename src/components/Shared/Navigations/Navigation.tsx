"use client";
import Image from "next/image";
import Link from "next/link";
import { features } from "process";
import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Button from "../Buttons/Button";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdCancel } from "react-icons/md";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { Link as Scrolling } from "react-scroll";
import { useAuth } from "@clerk/nextjs";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDrawer = () => {
    setIsOpen((prevvalue) => !prevvalue);
  };
  const { isSignedIn } = useAuth();
  const menu = [
    { name: "Features", route: "features" },
    {
      name: "Pricing",
      route: "pricing",
    },
  ];

  return (
    <>
      <nav className="w-full h-[80px] flex items-center justify-between px-5 shadow-md">
        <Link href={"/"} className="h-[50px] w-[130px] relative">
          <Image
            className="w-full h-full object-cover"
            src={"/Assets/Logo.webp"}
            alt=""
            fill
          />
        </Link>
        <div className="md:flex hidden items-center justify-center gap-4">
          {menu.map((item: any, index: number) => (
            <Scrolling
              key={index}
              activeClass="active"
              to={item.route}
              spy={true}
              smooth={true}
              hashSpy={true}
              duration={1000}
              className="text-black-secondary text-base font-medium cursor-pointer hover:text-brand-tartary"
            >
              {item.name}
            </Scrolling>
          ))}
        </div>
        <div className="md:flex hidden">
        {isSignedIn ? (
              <Button
              route="/dashboard"
              text=" Dashboard"
              icon
            />
            ) : (
              <Button
              route="/sign-in"
              text=" Get Started"
              icon
            />
            )}
        </div>
        <HiMenuAlt3
          onClick={toggleDrawer}
          className="md:hidden inline-block text-black-main text-2xl"
        />
      </nav>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        style={{
          width: "100%",
        }}
      >
        <section className="w-full h-full px-4 py-5">
          <div className="w-full flex items-center justify-between">
            <Link
              onClick={toggleDrawer}
              href={"/"}
              className="h-[50px] w-[130px] relative"
            >
              <Image
                className="w-full h-full object-cover"
                src={"/Assets/Logo.webp"}
                alt=""
                fill
              />
            </Link>
            <MdCancel
              onClick={toggleDrawer}
              className="text-brand-tartary text-2xl"
            />
          </div>
          <div className="w-full h-full flex flex-col items-center justify-center gap-6">
            {menu.map((item: any, index: number) => (
              <Scrolling
                key={index}
                activeClass="active"
                to={item.route}
                onClick={toggleDrawer}
                spy={true}
                smooth={true}
                hashSpy={true}
                duration={1000}
                className="text-black-secondary text-base font-medium cursor-pointer hover:text-brand-tartary"
              >
                {item.name}
              </Scrolling>
            ))}
        {isSignedIn ? (
              <Button
              route="/dashboard"
              text=" Dashboard"
              icon
            />
            ) : (
              <Button
              route="/sign-in"
              text=" Get Started"
              icon
            />
            )}
          </div>
        </section>
      </Drawer>
    </>
  );
};

export default Navigation;
