import { BorderStyle, FormField, InputProps, ValidationState, Variant } from "./types";

export const borderClasses: Record<BorderStyle, string> = {
  default: "border border-gray-800",
  shadow: "shadow-lg",
  outline: "border-2 border-gray-900",
};
export const variants = ["primary", "secondary", "danger"] as const;
export const gridClasses = `
   space-y-4 max-w-sm mx-auto mt-10
  sm:flex sm:flex-col sm:items-center sm:space-y-4
  md:flex-row md:space-y-0 md:space-x-4 md:justify-center
`;
export const inputFields: InputProps[] = [
  {
    type: "text",
    label: "Nombre",
    placeholder: "Escribe tu nombre",
  },
  {
    type: "email",
    label: "Correo electrónico",
    placeholder: "ejemplo@correo.com",
    validationState: "success",
  },
  {
    type: "password",
    label: "Contraseña",
    placeholder: "********",
    validationState: "error",
    errorMessage: "La contraseña es demasiado corta",
  },
  {
    type: "text",
    label: "Deshabilitado",
    placeholder: "No editable",
    disabled: true,
  },
];

export const inputClasses: Record<ValidationState, string> = {
  default: "border-gray-300 focus:border-blue-500 focus:ring-blue-500",
  error: "border-red-500 focus:border-red-500 focus:ring-red-500",
  success: "border-green-500 focus:border-green-500 focus:ring-green-500",
};

export const buttonClasses: Record<Variant, string> = {
  primary: "bg-blue-500 hover:bg-blue-700 text-white",
  secondary: "bg-green-600 hover:bg-green-500 text-white",
  danger: "bg-red-400 hover:bg-red-700 text-white",
};


export const loginFields: FormField[] = [
  { type: "email", label: "email", placeholder: "ejemplo@correo.com" },
  { type: "password", label: "password", placeholder: "********" },
];

export const registerFields: FormField[] = [
  { type: "text", label: "name", placeholder: "Escribe tu nombre" },
  { type: "email", label: "email", placeholder: "ejemplo@correo.com" },
  { type: "password", label: "password", placeholder: "********" },
  { type: "password", label: "Confirmar password", placeholder: "********" },
];
