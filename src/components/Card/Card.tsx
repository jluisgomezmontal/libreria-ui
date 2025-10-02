import { CardProps } from "@/utils/types";
import { borderClasses } from "@/utils/utils";
import React, { ReactNode } from "react";


const Card: React.FC<CardProps> = ({
  imageSrc,
  header,
  children,
  footer,
  borderStyle = "default",
  className = "",
}) => {
  return (
    <div
      className={`
        bg-white rounded-lg overflow-hidden
        ${borderClasses[borderStyle]}
        ${className}
      `}
    >
      {/* Imagen */}
      {imageSrc && (
        <img src={imageSrc} alt="" className="w-full h-48 object-cover" />
      )}

      {/* Header */}
      {header && (
        <div className="px-4 py-3 border-b border-gray-200">
          {header}
        </div>
      )}

      {/* Body */}
      {children && (
        <div className="px-4 py-4">
          {children}
        </div>
      )}

      {/* Footer */}
      {footer && (
        <div className="px-4 py-3 border-t border-gray-200 bg-gray-50">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;
