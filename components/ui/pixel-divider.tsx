// components/TetrisDivider.tsx
"use client";

import * as React from "react";

type Props = {
  className?: string;
  height?: number;          // px
  square?: number;          // px size of each cube
  columns?: number;         // how many columns across
  topColor?: string;        // light bg color of the section above
  midColor?: string;        // green mid tone
  bottomColor?: string;     // dark section color below
  rounded?: number;         // cube corner radius
};

export default function TetrisDivider({
  className = "",
  height = 180,
  square = 14,
  columns = 64,
  topColor = "#F6FFF8",     // match your light section bg
  midColor = "#9BF6C8",     // soft mint
  bottomColor = "#0F0F0F",  // matches your dark section
  rounded = 2,
}: Props) {
  const rows = Math.ceil(height / square);
  const width = columns * square;

  // simple deterministic "tetris-ish" skyline + bridges
  const blocks: Array<{ x: number; y: number }> = [];
  for (let c = 0; c < columns; c++) {
    const wave =
      0.35 * (Math.sin(c * 0.4) + 1) + 0.2 * (Math.sin(c * 0.9 + 1) + 1);
    let h = Math.max(1, Math.round((rows * (0.2 + wave * 0.4))));
    // add little steps so it feels chunkier / tetromino-like
    if (c % 7 === 0) h += 1;
    if (c % 11 === 0 && h > 2) h -= 1;

    for (let r = 0; r < h; r++) {
      blocks.push({ x: c, y: rows - 1 - r });
    }
    // occasional side "bridge" to mimic tetromino joints
    if (c % 5 === 2 && h > 2 && c + 1 < columns) {
      blocks.push({ x: c + 1, y: rows - 1 - (h - 2) });
    }
  }

  return (
    <div className={["relative w-full select-none", className].join(" ")}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        width="100%"
        height={height}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          {/* vertical color ramp */}
          <linearGradient id="tetrisFill" x1="0" x2="0" y1="1" y2="0">
            <stop offset="0%" stopColor={bottomColor} />
            <stop offset="55%" stopColor={midColor} />
            <stop offset="100%" stopColor={topColor} />
          </linearGradient>

          {/* faint grid stroke (subtle) */}
          <pattern
            id="grid"
            width={square}
            height={square}
            patternUnits="userSpaceOnUse"
          >
            <rect
              width={square}
              height={square}
              fill="none"
              stroke="rgba(0,0,0,.12)"
              strokeWidth="1"
            />
          </pattern>
        </defs>

        {/* optional grid overlay */}
        <rect x="0" y="0" width={width} height={height} fill="url(#grid)" />

        {/* blocks */}
        <g fill="url(#tetrisFill)">
          {blocks.map((b, i) => (
            <rect
              key={i}
              x={b.x * square}
              y={b.y * square}
              width={square}
              height={square}
              rx={rounded}
              ry={rounded}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
