import SectionHeading from "../ui/SectionHeading";
const features = [
 { title: "Every transaction, organised", text: "Record income, expenses and transfers with categories, search and filters.", tag: "Core", big: true, symbol: "↔" },
 { title: "Multiple accounts", text: "Keep bank, cash and card activity in one view.", tag: "Core", symbol: "▣" },
 { title: "Statement imports", text: "Bring in CSV statements and review entries before saving.", tag: "Planned MVP", symbol: "⇪" },
 { title: "Spending insights", text: "Compare categories and trends across different time ranges.", tag: "Core", big: true, symbol: "▥" },
 { title: "Budgets and alerts", text: "Set category limits and get notified about thresholds.", tag: "Planned", symbol: "◉" },
 { title: "Investments and goals", text: "Track savings goals, FDs, RDs and investments.", tag: "Planned", symbol: "◎" },
 { title: "Household finances", text: "Share selected financial information with permission controls.", tag: "Planned", symbol: "♧" },
 { title: "Android SMS ingestion", text: "Future companion for transaction detection, subject to permissions.", tag: "Exploring", symbol: "▤" },
];
export default function FeaturesBento() {
 return <section id="features" className="bg-slate-100/80 px-5 py-24 dark:bg-slate-900/60 lg:px-8"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="What we're building" title="Powerful tools. One connected picture." description="Start with the fundamentals and grow into budgeting, investing and automation. Availability is clearly marked because the product is still under development." />
 <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{features.map(f => <article key={f.title} className={`group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950 ${f.big ? "lg:col-span-2" : ""}`}>
  <div aria-hidden="true" className="absolute -right-8 -top-8 h-36 w-36 rounded-full bg-accent/10 blur-2xl"/><div className="relative flex items-start justify-between"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-2xl font-bold text-accent-ink dark:bg-accent/15 dark:text-accent">{f.symbol}</span><span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold text-slate-500 dark:bg-slate-800">{f.tag}</span></div>
  <h3 className="relative mt-8 text-xl font-extrabold">{f.title}</h3><p className="relative mt-3 max-w-md text-sm leading-7 text-slate-600 dark:text-slate-400">{f.text}</p>
  {f.big && <div className="mt-7 flex gap-2"><div className="h-2 w-2/5 rounded-full bg-accent"/><div className="h-2 w-1/4 rounded-full bg-accent/40"/><div className="h-2 flex-1 rounded-full bg-slate-200 dark:bg-slate-800"/></div>}
 </article>)}</div></div></section>;
}
