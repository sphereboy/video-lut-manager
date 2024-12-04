"use client";

import Image from "next/image";
import { Download } from "lucide-react";
import { downloadLut } from "@/utils/lutManager";
import { MouseEvent } from "react";

type LUT = {
  id: number;
  name: string;
  category: string;
  compatibility: string[];
  filename: string;
};

export default function LUTCard({ lut }: { lut: LUT }) {
  const handleDownload = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const blob = await downloadLut(lut.filename);
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = lut.filename;
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading LUT:", error);
      alert("Failed to download LUT. Please try again.");
    }
  };

  return (
    <div className="group relative overflow-hidden rounded-xl gradient-border transition-all duration-300 hover:scale-[1.02]">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={`/placeholder.svg`}
          alt={lut.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="relative space-y-4 p-5">
        <h3 className="text-lg font-bold text-white">{lut.name}</h3>
        <div className="flex flex-wrap gap-2">
          {lut.compatibility.map((software) => (
            <span
              key={software}
              className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
            >
              {software}
            </span>
          ))}
        </div>
        <button
          onClick={handleDownload}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2.5 font-semibold text-white transition-all duration-300 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg"
        >
          <Download className="h-4 w-4" />
          <span>Download LUT</span>
        </button>
      </div>
    </div>
  );
}
