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
        "md:p-[8px] md:rounded-[28px]",
        props.background === "translucent" ? translucentClass : opaqueClass,
      ].join(" ")}
    >
      <div className="md:border-4 md:border-[var(--champagne-dark)] md:p-[4px] md:rounded-[20px]">
        <div className="md:border md:border-[var(--champagne-dark)] md:rounded-[14px]">
          {props.children}
        </div>
      </div>
    </div>
  );
}
