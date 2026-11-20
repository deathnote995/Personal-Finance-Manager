type Props = { eyebrow: string; title: string; description?: string; center?: boolean };
export default function SectionHeading({ eyebrow, title, description, center = false }: Props) {
  return <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
    <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
    <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">{title}</h2>
    {description && <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-400">{description}</p>}
  </div>;
}
