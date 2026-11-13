import type { ReactNode } from "react";

type Props = {
  id: string;
  title: string;
  children: ReactNode;
};

export function Section({ id, title, children }: Props) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-line py-14">
      <h2 className="mb-8 font-mono text-sm tracking-widest text-muted uppercase">
        {title}
      </h2>
      {children}
    </section>
  );
}
