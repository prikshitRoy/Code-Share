"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/cn";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div>
      <div
        id="screenshot"
        className={cn(
          "relative z-0 w-auto min-w-[512px] max-w-[5xl]",
          "transition-all duration-100 ease-in-out"
        )}
      >
        <div
          className={cn(
            "invisible absolute inset-0",
            "bg-noise bg-contain opacity-30"
          )}
        />

        {/* Inside Div */}
        <div
          className={cn(
            "relative z-[1] h-full w-full min-w-[480px] max-w-2xl rounded-lg"
          )}
        >
          <div
            className={cn(
              "absolute inset-0 rounded-lg",
              "after:absolute after:inset-0 after:z-[2] after:translate-y-6 after:rounded-xl after:bg-black/60 after:blur-xl"
            )}
          >
            <div className={cn("absolute inset-0 z-[3] rounded-lg")} />
          </div>

          <div className={cn("relative z-[4] rounded-lg", "bg-black/70")}>
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
