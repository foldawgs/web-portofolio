import React from "react";
import { cn } from "@/lib/utils";

export default function DotBackgroundWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative w-full", className)}>
      {/* Dot pattern bg */}
      <div
        className={cn(
          "absolute inset-0 z-0 pointer-events-none",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />
      {/* Fade mask */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-white dark:bg-neutral-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      
      <div className="relative z-20">{children}</div>
    </div>
  );
}
