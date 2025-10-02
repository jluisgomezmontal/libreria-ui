import { useState, FormEvent } from "react";
import { Input, Button } from "@/components";
import { loginFields, registerFields } from "@/utils/utils";
import { AuthFormProps } from "@/utils/types";
import { useRouter } from "next/navigation";

export const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const fields = type === "login" ? loginFields : registerFields;
 const router = useRouter();
  const [formData, setFormData] = useState<Record<string, string>>(
    fields.reduce((acc, field) => ({ ...acc, [field.label]: "" }), {})
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (label: string, value: string) => {
    setFormData((prev) => ({ ...prev, [label]: value }));
  };

const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setError(null);
  setSuccess(null);

  if (type === "register") {
    const password = formData["password"];
    const confirmPassword = formData["Confirmar password"];
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      setLoading(false);
      return;
    }
  }

  try {
    const url =
      type === "login"
        ? "https://libreria-api-4yc7.onrender.com/api/auth/login"
        : "https://libreria-api-4yc7.onrender.com/api/auth/register";

    const body =
      type === "login"
        ? {
            email: formData["email"],
            password: formData["password"],
          }
        : {
            name: formData["name"],
            email: formData["email"],
            password: formData["password"],
          };

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Error en la petición");
    }

    setSuccess(type === "login" ? "¡Login exitoso!" : "¡Usuario registrado!");
    if (type === "login") {
      localStorage.setItem("email", formData["email"]);
      localStorage.setItem("token", data.token);
       router.push("/");
    }
    console.log("Respuesta API:", data);
  } catch (err: any) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};


  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto space-y-4 p-6 border rounded-lg shadow-md"
    >
      <h2 className="text-xl font-semibold text-center capitalize">{type}</h2>

      {fields.map((field) => (
        <Input
          key={field.label}
          type={field.type}
          label={field.label}
          placeholder={field.placeholder}
          value={formData[field.label]}
          onChange={(e) => handleChange(field.label, e.target.value)}
          validationState={field.validationState}
          errorMessage={field.errorMessage}
          disabled={loading || field.disabled}
        />
      ))}

      {error && <p className="text-red-500 text-sm">{error}</p>}
      {success && <p className="text-green-500 text-sm">{success}</p>}

      <Button type="submit" variant="primary" className="w-full" state={loading ? "loading" : "default"}>
        {type === "login" ? "Iniciar sesión" : "Registrarse"}
      </Button>
    </form>
  );
};
