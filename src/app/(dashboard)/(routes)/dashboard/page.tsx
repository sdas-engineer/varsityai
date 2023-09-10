import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs";
import { ArrowRight} from "lucide-react";
import FileUpload from "@/components/FileUpload";
import Link from "next/link";
import { checkSubscription } from "@/lib/subscription";
import SubscriptionButton from "@/components/SubscriptionButton";
import { db } from "@/lib/db";
import { chats } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export default async function Home() {
  const { userId } = await auth();
  const isAuth = !!userId;
  const isPro = await checkSubscription();
  let firstChat;
  if (userId) {
    firstChat = await db.select().from(chats).where(eq(chats.userId, userId));
    if (firstChat) {
      firstChat = firstChat[0];
    }
  }

  return (
    <div className="grid items-center justify-center h-max mt-32">
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center p-2">
          Read, Research and Write Faster with AI
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center pl-8 pr-8">
          Chat with your own AI Research Assistant to save hours of manual work
        </p>
      </div>
      <div className="w-auto mt-4">
        <FileUpload />
      </div>
      <div className="w-full flex justify-center items-center">
            {isAuth && firstChat && (
              <Link href={`/chat/${firstChat.id}`}>
                <Button className="mt-4 bg-gradient-to-r from-yellow-600 to-red-600">
                  Chat with AI Assistant
                </Button>
              </Link>
            )}
        </div>
    </div>
  );
}