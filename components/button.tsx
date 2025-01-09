import { ReactNode } from "react";

export default function Button(props: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <button
      className={`py-4 px-8 bg-zinc-200 hover:bg-zinc-300 rounded-full border-2 border-black text-black font-bold transition-all ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </button>
  );
}
