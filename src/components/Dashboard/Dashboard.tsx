"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components";

interface Stat {
  name: string;
  variant: string;
  count: number;
}

export default function Dashboard() {
  const [stats, setStats] = useState<Stat[]>([]);

  const fetchStats = async () => {
    try {
      const res = await fetch("https://libreria-api-4yc7.onrender.com/api/components/stats");
      const data = await res.json();
      setStats(data);
    } catch (err) {
      console.error("Error al obtener estadísticas:", err);
    }
  };

  useEffect(() => {
    fetchStats();
    const interval = setInterval(fetchStats, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Dashboard - Estadísticas en Tiempo Real</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.sort().map((stat) => (
          <div
            key={`${stat.name}-${stat.variant}`}
            className="p-4 border rounded-lg shadow flex justify-between items-center"
          >
            <div>
              <p className="text-sm text-gray-500">{stat.name}</p>
              <p className="text-xs text-gray-400 capitalize">{stat.variant}</p>
            </div>
            <div className="text-2xl font-bold text-blue-600">{stat.count}</div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <Button
          variant="primary"
          onClick={() => fetchStats()}
          className="w-full sm:w-auto"
        >
          Actualizar Ahora
        </Button>
      </div>
    </div>
  );
}
