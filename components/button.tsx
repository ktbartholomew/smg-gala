import { ReactNode } from "react";

export default function Button(props: {
  children: ReactNode;
  size?: "small" | "medium" | "large";
  className?: string;
}) {
  let sizeClasses;
  switch (props.size) {
    case "small":
      sizeClasses = "py-1 px-4 border-1";
      break;
    case "medium":
    default:
      sizeClasses = "py-4 px-8 border-2";
      break;
  }

  return (
    <button
      className={`${sizeClasses} bg-champagne-light hover:bg-champagne-dark rounded-full border-2 border-black text-black font-bold transition-all ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </button>
  );
}
