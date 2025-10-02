"use client";

import { Loader2 } from "lucide-react";
import { ButtonProps } from "@/utils/types";
import { buttonClasses } from "@/utils/utils";
import { useState } from "react";

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  state = "default",
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  className = "",
  onClick,
  ...props
}) => {
  const [clicked, setClicked] = useState(false);
  const isLoading = state === "loading";
  const isDisabled = state === "disabled" || isLoading;

  const trackClick = async () => {
    try {
      await fetch("https://libreria-api-4yc7.onrender.com/api/components/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: children,
          variant,
          action: "click",
        })
      });

      setClicked(true);
      setTimeout(() => setClicked(false), 1500);
    } catch (err) {
      console.error("Error al trackear componente:", err);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isDisabled) {
      trackClick();
      if (onClick) onClick(e);
    }
  };

  return (
    <button
      disabled={isDisabled}
      className={`
        relative inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors
        ${buttonClasses[variant]}
        ${isDisabled ? "opacity-60 cursor-not-allowed" : ""}
        ${className}
      `}
      onClick={handleClick}
      {...props}
    >
      {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
      {!isLoading && LeftIcon && <LeftIcon className="w-4 h-4" />}
      <span>{children}</span>
      {!isLoading && RightIcon && <RightIcon className="w-4 h-4" />}

      {/* Toast pequeño */}
      {clicked && !isLoading && (
        <div className="absolute -top-8 right-1/2 transform translate-x-1/2 bg-green-500 text-white text-xs px-2 py-1 rounded shadow-md animate-fade-in-out">
          ¡Click registrado!
        </div>
      )}
    </button>
  );
};

export default Button;
