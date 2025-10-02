"use client"
import { Button } from "@/components";
import { AuthForm } from "@/components/Auth/AuthForm";
import { useState } from "react";

export default function Home() {
  const [mode, setMode] = useState<"login" | "register">("login");

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-4 space-y-4">
      <AuthForm type={mode} />

      <Button
        variant="secondary"
        onClick={() => setMode(mode === "login" ? "register" : "login")}
      >
        {mode === "login" ? "Crear cuenta" : "Ya tengo cuenta"}
      </Button>
    </div>
  );
}
