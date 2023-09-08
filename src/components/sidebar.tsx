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
      </div>
        <SubscriptionButton isPro={isPro} />
    </div>
  );
};