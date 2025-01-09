import { ReactNode } from "react";
import buttonStyle from "./glow-button.module.css";

export default function GlowButton(props: { children: ReactNode }) {
  return (
    <button
      className={`py-4 px-8 border border-zinc-200 bg-black/10 backdrop-blur-sm hover:bg-black/30 rounded-full text-zinc-200 font-bold transition-all ${buttonStyle.glowButton}`}
    >
      {props.children}
    </button>
  );
}
