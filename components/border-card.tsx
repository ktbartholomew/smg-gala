import { ReactNode } from "react";

export default function BorderCard(props: {
  background: "translucent" | "opaque";
  children: ReactNode;
}) {
  const translucentClass =
    "bg-gradient-to-tr from-zinc-100/30 to-zinc-100/30 backdrop-blur-sm";
  const opaqueClass = "bg-background";

  return (
    <div
      className={[
        "p-[8px] rounded-[28px]",
        props.background === "translucent" ? translucentClass : opaqueClass,
      ].join(" ")}
    >
      <div className="border-4 border-[var(--champagne-dark)] p-[4px] rounded-[20px]">
        <div className="border border-[var(--champagne-dark)] rounded-[14px]">
          {props.children}
        </div>
      </div>
    </div>
  );
}
