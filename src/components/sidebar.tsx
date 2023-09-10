"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FileText } from "lucide-react";
import SubscriptionButton from "./SubscriptionButton";

type Props = {
  isPro: boolean;
};

export const Sidebar = ({isPro }: Props)  => {
  return (
    <div className="space-y-4 p-4 flex flex-col h-screen text-gray-200 bg-gray-900">
      <div className="px-3 py-2 flex-1">
        <div className="flex items-center text-lg font-bold justify-left h-14">
          <div>VarsityAI Playground</div>
        </div>
        <div className="overflow-y-auto overflow-x-hidden flex-grow pt-12">
          <ul className="flex flex-col py-4 space-y-1">
            <li className="px-5">
              <div className="flex flex-row items-center h-8">
                <div className="text-base font-bold tracking-wide text-white-500">Menu</div>
              </div>
            </li>
            <li>
              <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gradient-to-r from-yellow-600 to-red-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-yellow-600 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                </span>
                <span className="ml-2 text-base tracking-wide truncate">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gradient-to-r from-yellow-600 to-red-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-yellow-600 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
                </span>
                <span className="ml-2 text-base tracking-wide truncate">Chats</span>
              </a>
            </li>
            <li className="px-5">
              <div className="flex flex-row items-center h-8">
                <div className="text-base font-bold tracking-wide text-white-500">Help</div>
              </div>
            </li>
            <li>
              <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gradient-to-r from-yellow-600 to-red-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-yellow-600 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
                </span>
                <span className="ml-2 text-base tracking-wide truncate">Prompt List</span>
              </a>
            </li>
            <li>
              <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gradient-to-r from-yellow-600 to-red-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-yellow-600 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
                </span>
                <span className="ml-2 text-base tracking-wide truncate">Feature Request</span>
              </a>
            </li>
            <li>
              <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gradient-to-r from-yellow-600 to-red-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-yellow-600 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
                </span>
                <span className="ml-2 text-base tracking-wide truncate">Report Bug</span>
                {/* <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-500 bg-green-50 rounded-full">15</span> */}
              </a>
            </li>
            <li className="px-5">
              <div className="flex flex-row items-center h-8">
                <div className="text-base font-bold tracking-wide text-white-500">Settings</div>
              </div>
            </li>
            <li>
              <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gradient-to-r from-yellow-600 to-red-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-yellow-600 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                </span>
                <span className="ml-2 text-base tracking-wide truncate">Profile</span>
              </a>
            </li>
            <li>
              <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gradient-to-r from-yellow-600 to-red-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-yellow-600 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </span>
                <span className="ml-2 text-base tracking-wide truncate">Subscription</span>
              </a>
            </li>
          </ul>
        </div>

      </div>
        <div className="flex items-center gap-4 text-sm text-slate-500 flex-wrap">
            <Link href="/">Home</Link>
            <Link href="/">FAQ</Link>
            <Link href="/">Terms</Link>
            <Link href="/">Privacy</Link>
        </div>
        <SubscriptionButton isPro={isPro} />
    </div>
  );
};