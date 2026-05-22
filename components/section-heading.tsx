type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  inverted?: boolean;
};

export function SectionHeading({ eyebrow, title, description, inverted = false }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-3xl">
      {/* eyebrow */}
      <p className="mb-4 flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-orange">
        <span className="h-px w-6 bg-orange" />
        {eyebrow}
      </p>

      {/* title */}
      <h2
        className={`font-display text-balance text-4xl font-black uppercase tracking-tight leading-none md:text-6xl ${
          inverted ? "text-white" : "text-white"
        }`}
      >
        {title}
      </h2>

      {/* description */}
      {description ? (
        <p className={`mt-5 max-w-2xl text-base leading-7 md:text-lg ${inverted ? "text-white/45" : "text-white/45"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
