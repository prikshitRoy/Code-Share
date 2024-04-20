"use client";

import Kbd from "../ui/Kbd";
import { cn } from "@/lib/cn";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Link
        href="/dashboard"
        className={cn(
          "flex items-center gap-6 rounded-lg p-1 font-medium",
          "select-none outline-none",
          "border border-white/20 bg-black",
          "transition-all duration-200 ease-in-out",
          "hover:bg-white/20 hover:text-almost-white",
          "focus:text-almost-white focus:ring-1 focus:ring-almost-white focus:ring-offset-2 focus:ring-offset-black",
          "group"
        )}
      >
        <div className={cn("flex items-center gap-2")}>
          <ArrowLeft
            size={16}
            className={cn(
              "translate-x-0.5",
              "transition-transform duration-100 ease-in-out",
              "group-hover:translate-x-0"
            )}
            aria-hidden="true"
          />
          Dashboard
        </div>

        <Kbd keys={["B"]} />
      </Link>
    </div>
  );
}
