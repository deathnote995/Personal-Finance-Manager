export default function Footer() {
  return <footer className="border-t border-slate-200 bg-white px-5 py-12 dark:border-slate-800 dark:bg-slate-950">
    <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
      <div><a href="/" className="text-2xl font-black"><span className="text-accent">Coin</span>Flow.</a><p className="mt-4 max-w-sm text-sm leading-7 text-slate-500">A clearer view of your financial life. No payments or money transfers.</p></div>
      <div><h3 className="font-bold">Explore</h3><div className="mt-4 flex flex-col gap-3 text-sm text-slate-500"><a href="#features">Features</a><a href="#analytics">Analytics</a><a href="#how-it-works">How it works</a><a href="#faq">FAQ</a></div></div>
      <div><h3 className="font-bold">Product status</h3><p className="mt-4 text-sm leading-7 text-slate-500">Under development. Visuals use sample data. Features described as planned are not yet available.</p></div>
    </div><div className="mx-auto mt-12 max-w-7xl border-t border-slate-200 pt-6 text-xs text-slate-500 dark:border-slate-800">© {new Date().getFullYear()} CoinFlow — working project name.</div>
  </footer>;
}
