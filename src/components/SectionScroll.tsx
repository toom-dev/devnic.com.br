import React from "react";
import { MacbookScroll } from "./ui/macbook-scroll";

export function MacbookScrollDemo() {
  return (
    <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full">
      <MacbookScroll
        title={
          <span>
            Sistemas pensados para a sua empresa
          </span>
        }
        src={`/linear.webp`}
        showGradient={false}
      />
    </div>
  );
}
