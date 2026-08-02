"use client";

import { useState } from "react";
import { routers } from "./data/routers";

type Router = {
  name: string;
  wifi: string;
  speed: string;
  band: string;
  ports: string;
};

export default function Home() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState<Router | null>(null);

  const handleSearch = () => {
    const router = routers.find((r) =>
      r.name.toLowerCase().includes(search.toLowerCase())
    );

    setResult(router || null);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-bold mb-4">
        Project Eagle
      </h1>

      <p className="text-xl text-gray-300 mb-8 text-center">
        Home Networking Compatibility Platform
      </p>

      <input
        type="text"
        placeholder="Search Router or Mesh..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-xl rounded-xl border border-gray-700 bg-slate-900 px-4 py-3"
      />

      <button
        onClick={handleSearch}
        className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700"
      >
        Search
      </button>

      {result ? (
        <div className="mt-8 w-full max-w-xl rounded-xl bg-slate-900 border border-slate-700 p-6">
          <h2 className="text-2xl font-bold mb-4">{result.name}</h2>

          <p>📶 Wi-Fi: {result.wifi}</p>
          <p>⚡ Speed: {result.speed}</p>
          <p>📡 Band: {result.band}</p>
          <p>🔌 Ports: {result.ports}</p>

          <p className="mt-4 text-green-400 font-bold">
            ✅ Compatible
          </p>
        </div>
      ) : (
        search !== "" && (
          <p className="mt-6 text-red-400">
            ❌ Router not found.
          </p>
        )
      )}
    </main>
  );
}