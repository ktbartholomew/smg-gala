import { ReactNode } from "react";

export default function BorderCard(props: { children: ReactNode }) {
  return (
    <div className="bg-gradient-to-tr from-zinc-800/60 to-zinc-900/80 p-[8px] backdrop-blur-sm">
      <div className="border-4 border-sky-100 p-[4px]">
        <div className="border border-sky-100">{props.children}</div>
      </div>
    </div>
  );
}
