import { InputProps } from "@/utils/types";
import { inputClasses } from "@/utils/utils";

const Input: React.FC<InputProps> = ({
  type = "text",
  label,
  validationState = "default",
  disabled,
  errorMessage,
  className = "",
  ...props
}) => {
  return (
    <div className="flex flex-col space-y-1">
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}
      <input
        type={type}
        disabled={disabled}
        className={`
          px-3 py-2 rounded-lg border text-sm
          placeholder-gray-400
          focus:outline-none focus:ring-1
          ${inputClasses[validationState]}
          ${disabled ? "bg-gray-100 cursor-not-allowed" : ""}
          ${className}
        `}
        {...props}
      />
      {validationState === "error" && errorMessage && (
        <p className="text-xs text-red-600">{errorMessage}</p>
      )}
    </div>
  );
};

export default Input;
