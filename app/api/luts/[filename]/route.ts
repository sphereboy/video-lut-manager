import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import path from "path";
import fs from "fs/promises";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET(
  request: NextRequest,
  { params }: { params: { filename: string } }
) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const filename = params.filename;
    // Sanitize filename to prevent directory traversal
    const sanitizedFilename = path.basename(filename);

    // Construct the file path relative to project root
    const filePath = path.join(
      process.cwd(),
      "assets",
      "luts",
      sanitizedFilename
    );

    try {
      // Check if file exists and get its stats
      const stats = await fs.stat(filePath);

      // Read the file
      const fileBuffer = await fs.readFile(filePath);

      // Return the file with appropriate headers
      return new NextResponse(fileBuffer, {
        status: 200,
        headers: {
          "Content-Type": "application/octet-stream",
          "Content-Disposition": `attachment; filename="${sanitizedFilename}"`,
          "Content-Length": stats.size.toString(),
        },
      });
    } catch (error) {
      return new NextResponse("File not found", { status: 404 });
    }
  } catch (error) {
    console.error("Error serving LUT file:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
