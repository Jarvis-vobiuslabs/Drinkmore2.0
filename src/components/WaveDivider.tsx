import React from "react";

interface WaveDividerProps {
  variant?: "a" | "b" | "c";
  flip?: boolean;
  className?: string;
}

const paths = {
  a: "M0,64 C320,120 640,0 960,80 C1280,160 1600,40 1920,96 L1920,160 L0,160Z",
  b: "M0,96 C240,40 480,140 720,80 C960,20 1200,120 1440,60 C1680,0 1920,100 1920,100 L1920,160 L0,160Z",
  c: "M0,80 C480,160 960,0 1440,100 C1680,140 1920,60 1920,80 L1920,160 L0,160Z",
};

const WaveDivider: React.FC<WaveDividerProps> = ({ variant = "a", flip = false, className = "" }) => (
  <div className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""} ${className}`}>
    <svg
      viewBox="0 0 1920 160"
      preserveAspectRatio="none"
      className="w-full h-[60px] md:h-[100px]"
    >
      <path d={paths[variant]} fill="hsl(215 50% 10% / 0.4)" />
      <path d={paths[variant]} fill="hsl(210 45% 14% / 0.2)" transform="translate(0, -20)" />
    </svg>
  </div>
);

export default WaveDivider;
