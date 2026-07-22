export function ComingSoon({ title, phase }: { title: string; phase: string }) {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-32 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-stone">
        Coming in {phase}
      </p>
      <h1 className="font-display text-4xl text-basalt">{title}</h1>
      <p className="max-w-md text-basalt/70">
        This page is part of the phased build and hasn&rsquo;t been built
        yet.
      </p>
    </main>
  );
}
