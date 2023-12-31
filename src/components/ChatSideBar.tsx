"use client";
import { DrizzleChat } from "@/lib/db/schema";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { FileText, PlusCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import axios from "axios";
import SubscriptionButton from "./SubscriptionButton";

type Props = {
  chats: DrizzleChat[];
  chatId: number;
  isPro: boolean;
};

const ChatSideBar = ({ chats, chatId, isPro }: Props) => {
  const [loading, setLoading] = React.useState(false);

  return (
    <div className="space-y-4 p-4 flex flex-col h-screen text-gray-200 bg-gray-900">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard">
          <Button className="w-full border-dashed border-white border">
            <PlusCircle className="mr-2 w-4 h-4" />
            Add New Document
          </Button>
        </Link>

          <div className="flex flex-col gap-2 mt-4">
            {chats.map((chat) => (
              <Link key={chat.id} href={`/chat/${chat.id}`}>
                <div
                  className={cn("rounded-lg p-3 text-slate-300 flex items-center", {
                    " text-white": chat.id === chatId,
                    "hover:text-white": chat.id !== chatId,
                  })}
                >
                  <FileText className="mr-2" />
                  <p className="w-full overflow-hidden text-sm truncate whitespace-nowrap text-ellipsis">
                    {chat.docName}
                  </p>
                </div>
              </Link>
            ))}
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

export default ChatSideBar;
