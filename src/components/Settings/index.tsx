import { motion } from "framer-motion";

import { cn } from "@/lib/cn";
/* import Actions from "./Actions"; */
import { useStore } from "@/lib/store";

export default function Settings() {
  const hasCustomTheme = useStore((state) => state.hasCustomTheme);

  return (
    <>
      <div />

      {/* Setting Box border */}
      <motion.div
        className={cn(
          "fixed bottom-12 z-40 w-[960px] rounded-xl font-medium",
          "border border-white/20 bg-black/50 shadow-xl shadow-black/40 backdrop-blur-md"
        )}
      >
        {/* Inside Setting box */}
        <div
          className={cn(
            "relative flex-col overflow-hidden rounded-xl px-4 pb-4 pt-5",
            "border-b border-white/20 bg-black shadow-xl shadow-black/40",
            "transition-all duration-100 ease-in-out",
            hasCustomTheme ? "h-[211px]" : "h-[97px]"
          )}
        ></div>
        {/* TODO */}
        {/* <Actions /> */}
      </motion.div>
    </>
  );
}
