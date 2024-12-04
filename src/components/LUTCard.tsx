"use client";

import Image from "next/image";
import { Download, Lock } from "lucide-react";
import { downloadLut } from "@/utils/lutManager";
import { MouseEvent } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

type LUT = {
  id: number;
  name: string;
  category: string;
  compatibility: string[];
  filename: string;
};

export default function LUTCard({ lut }: { lut: LUT }) {
  const { data: session } = useSession();
  const router = useRouter();

  const handleDownload = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!session) {
      router.push("/auth/signin");
      return;
    }

    const downloadPromise = (async () => {
      try {
        const blob = await downloadLut(lut.filename);
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = lut.filename;
        a.click();
        window.URL.revokeObjectURL(url);
        return "LUT downloaded successfully";
      } catch (error) {
        console.error("Error downloading LUT:", error);
        throw new Error("Failed to download LUT. Please try again.");
      }
    })();

    toast.promise(downloadPromise, {
      loading: "Downloading LUT...",
      success: (message) => message,
      error: (err) => err.message,
    });
  };

  return (
    <div
      className={`group relative overflow-hidden rounded-xl gradient-border transition-all duration-300 hover:scale-[1.02] ${
        !session && "opacity-75"
      }`}
    >
      {!session && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
          <div className="text-center">
            <Lock className="mx-auto mb-2 h-6 w-6 text-white" />
            <p className="text-sm font-medium text-white">
              Sign in to download
            </p>
          </div>
        </div>
      )}
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
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2.5 font-semibold text-white transition-all duration-300 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
        >
          {session ? (
            <>
              <Download className="h-4 w-4" />
              <span>Download LUT</span>
            </>
          ) : (
            <>
              <Lock className="h-4 w-4" />
              <span>Sign in to Download</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
