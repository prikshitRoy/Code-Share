"use client";

import Code from "./Code";
import Views from "./Views";
import { cn } from "@/lib/cn";
import Wrapper from "./Wrapper";
import TitleBar from "./TitleBar";

export default function Editor({
  views,
  editable,
  isAuthenticated,
}: {
  views?: number;
  editable: boolean;
  isAuthenticated: boolean;
}) {
  return (
    <div
      id="editor"
      className={cn("relative flex h-full w-full flex-col items-center p-6")}
    >
      {views !== undefined && <Views views={views} />}
      Editor
      <Wrapper>
        <TitleBar editable={editable} />
        <Code editable={editable} />
      </Wrapper>
    </div>
  );
}
