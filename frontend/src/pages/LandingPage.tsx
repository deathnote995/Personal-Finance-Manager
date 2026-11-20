
const transactions = [
  { name: "Monthly salary", category: "Income", amount: "+₹85,000", positive: true },
  { name: "Groceries", category: "Shopping", amount: "-₹2,450", positive: false },
  { name: "Electricity bill", category: "Utilities", amount: "-₹1,820", positive: false },
];

function DashboardPreview() {
  return (
    <div className="mx-auto mt-16 max-w-5xl rounded-3xl border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-300/30 sm:p-6 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20">
      <div className="flex items-center justify-between border-b border-slate-100 pb-5 dark:border-slate-800">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-slate-400">
            Dashboard preview
          </p>
          <h2 className="mt-1 text-lg font-bold">
            Financial overview
          </h2>
        </div>
        <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent-hover">
          Demo data
        </span>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {[
          { label: "Total balance", value: "₹1,24,500" },
          { label: "Monthly income", value: "₹85,000" },
          { label: "Monthly expenses", value: "₹32,450" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-slate-100 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800"
          >
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {item.label}
            </p>
            <p className="mt-2 text-2xl font-bold tracking-tight">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-5">
        <div className="rounded-2xl border border-slate-100 p-5 lg:col-span-3 dark:border-slate-700">
          <h3 className="font-semibold">Spending overview</h3>
          <p className="mt-1 text-xs text-slate-500">
            Illustrative monthly spending
          </p>

          <div className="mt-8 flex h-40 items-end justify-between gap-3">
            {[42, 70, 55, 85, 60, 95, 73].map((height, index) => (
              <div
                key={index}
                className="flex flex-1 flex-col items-center gap-3"
              >
                <div className="flex h-32 w-full items-end">
                  <div
                    className="w-full rounded-t-lg bg-accent/80"
                    style={{ height: `${height}%` }}
                  />
                </div>
                <span className="text-xs text-slate-400">
                  {["M", "T", "W", "T", "F", "S", "S"][index]}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-100 p-5 lg:col-span-2 dark:border-slate-700">
          <h3 className="font-semibold">Recent activity</h3>

          <div className="mt-5 space-y-5">
            {transactions.map((transaction) => (
              <div
                key={transaction.name}
                className="flex items-center justify-between gap-2"
              >
                <div>
                  <p className="text-sm font-medium">
                    {transaction.name}
                  </p>
                  <p className="text-xs text-slate-500">
                    {transaction.category}
                  </p>
                </div>
                <span
                  className={`text-sm font-semibold ${
                    transaction.positive
                      ? "text-emerald-600 dark:text-emerald-400"
                      : "text-slate-700 dark:text-slate-200"
                  }`}
                >
                  {transaction.amount}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LandingPage() {
  return (
    <main>
      <section className="relative overflow-hidden px-5 pb-24 pt-20 sm:pt-28 lg:px-8">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />

        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-accent/20 bg-accent-soft px-4 py-2 text-xs font-semibold text-accent-hover">
            A clearer view of your finances
          </span>

          <h1 className="mt-8 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
            Your money deserves
            <span className="block text-accent">
              a clearer picture.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-400">
            Bring your financial activity into one place.
            Understand spending patterns, organise transactions,
            and make more informed decisions about your money.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="/register"
              className="rounded-xl bg-accent px-7 py-3.5 text-center font-semibold text-white shadow-lg shadow-slate-500/10 transition hover:bg-accent-hover"
            >
              Get started
            </a>
            <a
              href="#features"
              className="rounded-xl border border-slate-300 px-7 py-3.5 text-center font-semibold transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
            >
              Explore features
            </a>
          </div>

          <p className="mt-5 text-xs text-slate-500">
            Built for better financial visibility, not moving money.
          </p>
        </div>

        <DashboardPreview />
      </section>

      <section
        id="features"
        className="border-t border-slate-200 px-5 py-20 dark:border-slate-800"
      >
        <div className="mx-auto max-w-7xl">
          <p className="font-semibold text-accent">
            What you can manage
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Your financial life, organised.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Track transactions",
                description: "Keep income and expenses organised across accounts and categories.",
              },
              {
                title: "Understand spending",
                description: "Explore spending patterns through useful summaries and visualisations.",
              },
              {
                title: "See the bigger picture",
                description: "Bring account activity together for a more complete financial overview.",
              },
            ].map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="mb-5 h-10 w-10 rounded-xl bg-accent-soft" />
                <h3 className="text-lg font-bold">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="bg-slate-100 px-5 py-20 dark:bg-slate-900"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold">
            Start with the essentials.
          </h2>
          <p className="mt-5 leading-8 text-slate-600 dark:text-slate-400">
            Add your accounts, record transactions, and build a
            clearer understanding of your finances. Statement
            imports and additional automation are planned as
            the product develops.
          </p>
        </div>
      </section>

      <footer className="px-5 py-8 text-center text-sm text-slate-500">
        CoinFlow — Personal finance, made clearer.
      </footer>
    </main>
  );
}
