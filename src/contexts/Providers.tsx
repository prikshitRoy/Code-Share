"use client";

import * as ToolTipPrimitive from "@radix-ui/react-tooltip";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ToolTipPrimitive.Provider delayDuration={0}>
      {children}
    </ToolTipPrimitive.Provider>
  );
}
