"use client";

import { useState, useEffect } from "react";
import { User, LogOut, FileText, File } from "lucide-react";
import { useRouter } from "next/navigation";
import Button from "../Button/Button";

export const UserProfile = () => {
  const [email, setEmail] = useState<string | null>(null);
  const router = useRouter();
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    setEmail(storedEmail);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    router.push("/auth");
  };

  const handleExport = async (type: "csv" | "json") => {
    if (!token) {
      alert("No estás autenticado");
      return;
    }

    try {
      const res = await fetch(
        `https://libreria-api-4yc7.onrender.com/api/components/export?type=${type}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) throw new Error("Error al exportar");

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = type === "csv" ? "components.csv" : "components.json";
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
      alert("No se pudo exportar el archivo");
    }
  };

  if (!email) return null;

  return (
    <div className="w-full flex justify-end items-center gap-4 p-4">
      {/* Perfil */}
      <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg shadow-sm">
        <User className="w-6 h-6 text-gray-600" />
        <span className="text-gray-800 font-medium truncate">{email}</span>
      </div>

      {/* Export CSV */}
      <Button
        onClick={() => handleExport("csv")}
        variant="primary"
        leftIcon={FileText}
      >
        Export CSV
      </Button>

      {/* Export JSON */}
      <Button
        onClick={() => handleExport("json")}
        variant="secondary"
        leftIcon={File}
      >
        Export JSON
      </Button>

      {/* Logout */}
      <Button onClick={handleLogout} variant="danger" rightIcon={LogOut}>
        Logout
      </Button>
    </div>
  );
};
