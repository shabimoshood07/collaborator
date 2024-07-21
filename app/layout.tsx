import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Provider from "@/providers/LiveblocksProvider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Collaborator",
  description: "Collaborate with your colleagues😊",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: { colorPrimary: "#3371ff", fontSize: "16p x" },
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <Provider>{children}</Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
