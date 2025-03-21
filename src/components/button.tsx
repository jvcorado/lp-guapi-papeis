import React from "react";

interface ButtonProps {
  text: string;
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary";
  onClick?: () => void;
}

export default function Button({ text, size, color, onClick }: ButtonProps) {
  return <button className="h-[3.688rem] border-input ">{text}</button>;
}
