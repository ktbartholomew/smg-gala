import { ReactNode } from "react";

export default function BorderCard(props: {
  background: "translucent" | "opaque";
  children: ReactNode;
}) {
  const translucentClass =
    "bg-gradient-to-tr from-zinc-900/90 to-zinc-900/90 backdrop-blur-sm";
  const opaqueClass = "bg-background";

  return (
    <div
      className={[
        "p-[8px]",
        props.background === "translucent" ? translucentClass : opaqueClass,
      ].join(" ")}
    >
      <div className="border-4 border-zinc-100 p-[4px]">
        <div className="border border-zinc-100">{props.children}</div>
      </div>
    </div>
  );
}
