import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from "@clerk/nextjs";
import Providers from "@/components/Providers";
import { Toaster } from "react-hot-toast";
import { DM_Sans } from "next/font/google";


const inter = Inter({ subsets: ['latin'] })
const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'VarsityAI: Your AI Academic Research Assistant',
  description: 'Discover the power of VarsityAI, the AI-driven academic research assistant. Streamline your research, access precise insights, and elevate your academic journey. Join now!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <Providers>
        <html lang="en">
          <body className={dmSans.className}>{children}</body>
          <Toaster />
        </html>
      </Providers>
    </ClerkProvider>
  )
}
