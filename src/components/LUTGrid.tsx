"use client";

import LUTCard from "./LUTCard";

const luts = [
  {
    id: 1,
    name: "Sample LUT",
    category: "Technical",
    compatibility: ["Premiere", "DaVinci", "Final Cut"],
    filename: "Sample_LUT.cube",
  },
  {
    id: 2,
    name: "Cinematic Warm",
    category: "Cinematic",
    compatibility: ["Premiere", "DaVinci"],
    filename: "cinematic_warm.cube",
  },
  {
    id: 3,
    name: "Technical Rec709",
    category: "Technical",
    compatibility: ["Premiere", "Final Cut", "DaVinci"],
    filename: "technical_rec709.cube",
  },
  {
    id: 4,
    name: "Creative Neon",
    category: "Creative",
    compatibility: ["Premiere", "After Effects"],
    filename: "creative_neon.cube",
  },
];

export default function LUTGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {luts.map((lut) => (
        <LUTCard key={lut.id} lut={lut} />
      ))}
    </div>
  );
}
