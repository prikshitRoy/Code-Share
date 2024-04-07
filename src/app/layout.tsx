import "./globals.css";
import { cn } from "@/lib/cn";
import type { Metadata } from "next";
/* import Header from "@/components/Header"; */
import Providers from "@/contexts/Providers";
import { SUPPORTED_FONT_STYLES as fonts } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Code Share",
  description: "Share code with your fellow dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(fonts[0].variable, fonts[1].variable, fonts[2].variable)}
    >
      <body
        className={cn(
          "grid min-h-screen grid-rows-[auto,1fr] text-sm",
          "bg-almost-black text-greyish caret-fuchsia-500 selection:bg-fuchsia-500 selection:text-amlost-white"
        )}
      >
        <Providers>
          <main className={cn("grid place-items-center")}>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
