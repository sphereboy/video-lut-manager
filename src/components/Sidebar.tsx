import { Film, Sliders, Palette } from "lucide-react";

const categories = [
  { name: "Cinematic", icon: Film },
  { name: "Technical", icon: Sliders },
  { name: "Creative", icon: Palette },
];

export default function Sidebar() {
  return (
    <aside className="glass-effect w-72 p-6">
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
            {categories.map((category) => (
              <li key={category.name}>
                <a
                  href="#"
                  className="group flex items-center gap-3 rounded-lg px-4 py-3 text-gray-300 transition-all duration-200 hover:bg-white/5"
                >
                  <category.icon className="h-5 w-5 transition-colors group-hover:text-blue-400" />
                  <span className="font-medium transition-colors group-hover:text-white">
                    {category.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
