import { Search } from "lucide-react";

export default function Header() {
  return (
    <header className="glass-effect sticky top-0 z-10 border-b border-white/5 px-6 py-4">
      <div className="relative max-w-2xl">
        <input
          type="text"
          placeholder="Search LUTs..."
          className="w-full rounded-xl bg-white/5 px-4 py-2.5 pl-11 text-gray-100 placeholder-gray-400 outline-none ring-white/10 transition-all duration-200 hover:bg-white/10 focus:ring-2"
        />
        <Search className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
      </div>
    </header>
  );
}
