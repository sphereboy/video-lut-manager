"use client";

export async function downloadLut(filename: string): Promise<Blob> {
  const response = await fetch(`/api/luts/${encodeURIComponent(filename)}`, {
    credentials: "include", // Include authentication cookies
  });

  if (!response.ok) {
    throw new Error(`Failed to download LUT: ${response.statusText}`);
  }

  return await response.blob();
}

export async function getLutUrl(filename: string): Promise<string> {
  const blob = await downloadLut(filename);
  return URL.createObjectURL(blob);
}
