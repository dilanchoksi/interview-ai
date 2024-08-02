import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "InterView AI",
  description: "An AI-powered mock interview generator",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <title>InterView AI</title>
          <link rel="icon" href="logo.svg" />
        </head>
        <body className={inter.className}>
          <Toaster /> {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
