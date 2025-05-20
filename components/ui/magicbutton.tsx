
import React from "react";

const Magicbutton = ({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    title, icon, position, handleClick, otherClasses
}: {
    title: string;
    icon: React.ReactNode;
    position: string;
    handleClick?: () => void;
    otherClasses?: string;
}) => {
  return (
    <button className="relative inline-flex h-12 w-full p-[1px] overflow-hidden rounded-lg">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-2 shadow-lg ${otherClasses}`}>
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default Magicbutton;
