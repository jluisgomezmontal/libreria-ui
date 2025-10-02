import { ButtonHTMLAttributes, ElementType, InputHTMLAttributes, ReactNode } from "react";

export type InputType = "text" | "email" | "password";
export type ValidationState = "default" | "error" | "success";
export type Variant = "primary" | "secondary" | "danger";
export type State = "default" | "loading" | "disabled";
export type BorderStyle = "default" | "shadow" | "outline";

export interface CardProps {
  imageSrc?: string;
  header?: ReactNode;
  children?: ReactNode;
  borderStyle?: BorderStyle;
  className?: string;
}
export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  type?: InputType;
  label?: string;
  validationState?: ValidationState;
  errorMessage?: string;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  state?: State;
  leftIcon?: ElementType;
  rightIcon?: ElementType;
  className?: string;
}
export type FormField = {
  type: "text" | "email" | "password";
  label: string;
  placeholder: string;
  validationState?: "success" | "error";
  errorMessage?: string;
  disabled?: boolean;
};
export interface AuthFormProps {
  type: "login" | "register";
}
