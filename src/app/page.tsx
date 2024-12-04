import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import LUTGrid from "../components/LUTGrid";

export default function Home() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <Header />
        <LUTGrid />
      </main>
    </div>
  );
}
