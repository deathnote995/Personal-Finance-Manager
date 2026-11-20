import Button from "../ui/Button";
export default function HeroSection() {
  return <section className="relative isolate overflow-hidden px-5 pb-12 pt-20 sm:pt-24 lg:px-8">
    <div aria-hidden="true" className="pointer-events-none absolute -right-20 top-10 -z-10 h-96 w-96 rounded-full bg-accent/15 blur-3xl" />
    <div aria-hidden="true" className="pointer-events-none absolute -left-32 bottom-0 -z-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
    <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <div><span className="inline-flex rounded-full border border-accent/25 bg-accent-soft px-4 py-2 text-xs font-bold tracking-wide text-accent-ink dark:bg-accent/15 dark:text-accent">FINANCIAL CLARITY, YOUR WAY</span>
        <h1 className="mt-7 text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl xl:text-7xl">Your money.<br/><span className="text-accent">The full picture.</span></h1>
        <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">Bring accounts, transactions and spending insights together. Less guesswork, more control over where your money goes.</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Button href="/register">Get started</Button><Button href="#features" variant="secondary">Explore features</Button></div>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500"><span>✓ Personalised themes</span><span>✓ Clear financial insights</span><span>✓ No money transfers</span></div>
      </div>
      <div className="relative"><div className="absolute -inset-5 -z-10 rounded-[3rem] bg-accent/10 blur-2xl"/><div className="rounded-[2rem] border border-slate-200 bg-white/90 p-5 shadow-2xl shadow-slate-300/30 sm:p-7 dark:border-slate-700 dark:bg-slate-900/90 dark:shadow-black/40">
        <div className="flex items-center justify-between"><div><p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Demo overview</p><p className="mt-2 text-3xl font-black">₹2,48,750</p><p className="mt-1 text-xs text-slate-500">Illustrative tracked balance</p></div><div className="rounded-2xl bg-accent-soft px-4 py-3 text-2xl text-accent-ink dark:bg-accent/15 dark:text-accent">↗</div></div>
        <div className="mt-7 grid grid-cols-2 gap-3"><div className="rounded-2xl bg-emerald-50 p-4 dark:bg-emerald-950/40"><p className="text-xs text-emerald-800 dark:text-emerald-300">Income</p><p className="mt-2 text-xl font-bold text-emerald-700 dark:text-emerald-300">₹85,000</p></div><div className="rounded-2xl bg-slate-100 p-4 dark:bg-slate-800"><p className="text-xs text-slate-500">Expenses</p><p className="mt-2 text-xl font-bold">₹32,450</p></div></div>
        <div className="mt-6"><div className="mb-3 flex justify-between text-xs text-slate-500"><span>Monthly cash flow</span><span>Sample data</span></div><div className="flex h-32 items-end gap-2">{[34,55,42,76,61,89,64,94,72,81,67,96].map((v,i) => <div key={i} className="flex-1 rounded-t-md bg-accent/75" style={{height:`${v}%`}} />)}</div></div>
      </div><div className="absolute -bottom-5 -left-4 rounded-xl border border-slate-200 bg-white p-3 shadow-xl sm:-left-9 dark:border-slate-700 dark:bg-slate-800"><p className="text-xs text-slate-500">Savings this month</p><p className="mt-1 text-lg font-black text-emerald-600">₹52,550</p></div></div>
    </div>
  </section>;
}
