"use client";
import React from "react";
import { Input } from "./ui/input";
import { useChat } from "ai/react";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import MessageList from "./MessageList";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Message } from "ai";

type Props = { chatId: number };

const ChatComponent = ({ chatId }: Props) => {
  const { data, isLoading } = useQuery({
    queryKey: ["chat", chatId],
    queryFn: async () => {
      const response = await axios.post<Message[]>("/api/get-messages", {
        chatId,
      });
      return response.data;
    },
  });

  const { input, handleInputChange, handleSubmit, messages } = useChat({
    api: "/api/chat",
    body: {
      chatId,
    },
    initialMessages: data || [],
  });
  React.useEffect(() => {
    const messageContainer = document.getElementById("message-container");
    if (messageContainer) {
      messageContainer.scrollTo({
        top: messageContainer.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);
  return (
        
    // <div
    //   className="relative max-h-screen overflow-scroll"
    //   id="message-container"
    // >
    //   {/* header */}
    //   <div className="sticky top-0 inset-x-0 p-2 bg-white h-fit">
    //     {/*note icon*/}
    //   </div>

    <div className="flex flex-col pt-4 justify-between w-full h-screen col-span-4 overflow-scroll" id="message-container">
      <div className="w-full">
      {/* message list */}
        <MessageList messages={messages} isLoading={isLoading} />
      </div>
        <div className="sticky bottom-0 my-3 mx-4 px-4 pr-20 flex flex-row text-sm rounded-lg bg-elementGray2 relative ring-none"></div>
          <form
            onSubmit={handleSubmit}
            className="sticky bottom-0 inset-x-0 px-2 pt-6 py-4 bg-white"
          >
            <div className="flex">
              <Input
                value={input}
                onChange={handleInputChange}
                placeholder="Ask any question..."
                className="w-full h-12"
              />
              <Button className="bg-gradient-to-r from-yellow-600 to-red-600 ml-2 h-12 w-auto">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
    </div>
  );
};

export default ChatComponent;
