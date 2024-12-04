"use client";

import { Film, Sliders, Palette, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

const categories = [
  { name: "Cinematic", icon: Film, href: "/category/cinematic" },
  { name: "Technical", icon: Sliders, href: "/category/technical" },
  { name: "Creative", icon: Palette, href: "/category/creative" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <aside className="glass-effect flex h-screen w-72 flex-col p-6">
      <div className="mb-8">
        <h1 className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-3xl font-black text-transparent">
          xLUTs
        </h1>
        <p className="mt-2 text-sm text-gray-400">
          Professional LUT Management
        </p>
      </div>
      <div className="mb-6">
        <h2 className="mb-4 text-lg font-semibold text-gray-200">Categories</h2>
        <nav>
          <ul className="space-y-1">
            {categories.map((category) => {
              const isActive = pathname === category.href;
              return (
                <li key={category.name}>
                  <Link
                    href={category.href}
                    className={`group flex items-center gap-3 rounded-lg px-4 py-3 text-gray-300 transition-all duration-200 hover:bg-white/5 ${
                      isActive ? "bg-white/10 text-white" : ""
                    }`}
                  >
                    <category.icon
                      className={`h-5 w-5 transition-colors ${
                        isActive ? "text-blue-400" : "group-hover:text-blue-400"
                      }`}
                    />
                    <span className="font-medium transition-colors group-hover:text-white">
                      {category.name}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* User section */}
      <div className="mt-auto">
        {session ? (
          <div className="space-y-4">
            <div className="text-sm text-gray-400">
              Signed in as{" "}
              <span className="font-medium text-white">
                {session.user?.name}
              </span>
            </div>
            <button
              onClick={() => signOut()}
              className="flex w-full items-center gap-2 rounded-lg bg-white/5 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white/10"
            >
              <LogOut className="h-4 w-4" />
              Sign Out
            </button>
          </div>
        ) : (
          <Link
            href="/auth/signin"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-white/5 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white/10"
          >
            Sign In
          </Link>
        )}
      </div>
    </aside>
  );
}
