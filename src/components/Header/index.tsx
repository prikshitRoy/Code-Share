"use client";

import Auth from "./Auth";
import Help from "./Help";
import Home from "./Home";
import Social from "./Social";
import { cn } from "@/lib/cn";
import Message from "./Message";

import { useSession } from "next-auth/react";

export default function Header() {
  const { status: sessionStatus } = useSession();

  return (
    <header
      className={cn(
        "sticky top-0 z-40 flex h-16 items-center justify-between px-[18px] font-medium",
        "border-b border-white/20 bg-black shadow-xl shadow-black/40"
      )}
    >
      <Home />
      <Message />

      {sessionStatus !== "loading" && (
        <div className={cn("flex items-center justify-center")}>
          <Social />
          <Help />
          <Auth />
        </div>
      )}
    </header>
  );
}
