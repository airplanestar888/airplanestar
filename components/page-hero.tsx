type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/6 pt-28">
      {/* grid bg */}
      <div className="fresh-grid absolute inset-0 opacity-40" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,107,0,0.12),transparent_60%)]" />
      {/* bottom accent line */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-orange/40 to-transparent" />

      <div className="container-shell relative py-16 md:py-24">
        <p className="mb-5 flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-orange">
          <span className="h-px w-6 bg-orange" />
          {eyebrow}
        </p>
        <h1 className="font-display max-w-4xl text-balance text-5xl font-black uppercase tracking-tight text-white md:text-7xl leading-none">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/45">{description}</p>
        )}
      </div>
    </section>
  );
}
