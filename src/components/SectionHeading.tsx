import type { ReactNode } from "react";

export default function SectionHeading({ label, children }: { label: string; children: ReactNode }) {
  return (
    <>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">{label}</p>
      <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-white mb-5 tracking-tight leading-[1.15]">{children}</h2>
    </>
  );
}
