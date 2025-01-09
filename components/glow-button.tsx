import { ReactNode } from "react";
import buttonStyle from "./glow-button.module.css";

export default function GlowButton(props: { children: ReactNode }) {
  return (
    <button
      className={`py-4 px-8 border-2 border-yellow-500 bg-black/10 backdrop-blur-sm hover:bg-black/30 rounded-full text-yellow-500 font-bold transition-all ${buttonStyle.glowButton}`}
    >
      {props.children}
    </button>
  );
}
