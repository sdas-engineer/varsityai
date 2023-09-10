import Image from "next/image";
import { Inter } from "next/font/google";
import { DM_Sans } from "next/font/google";
import HomePage from "@/components/Home/HomePage";

const dmSans = DM_Sans({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`w-full h-full ${dmSans.className}`}>
      <HomePage />
    </main>
  );
}
