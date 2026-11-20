import SectionHeading from "../ui/SectionHeading";
const faqs = [
 {q:"Can CoinFlow transfer money?",a:"No. CoinFlow is intended for tracking, organising and analysing finances, not for processing payments."},
 {q:"Can it automatically connect to my bank?",a:"Direct bank integrations are not part of the initial MVP. Manual entries and statement imports are the starting point."},
 {q:"Will SMS transactions be supported?",a:"An Android companion is being explored for future SMS-assisted tracking. It depends on device permissions and applicable distribution policies."},
 {q:"Can I personalise the appearance?",a:"Yes. The current frontend supports light, dark and system themes, along with selectable accent colours stored locally."},
 {q:"Is the product available now?",a:"Not yet. This is an in-development product showcase, and the dashboard uses demonstration data."},
];
export default function FAQSection() { return <section id="faq" className="px-5 py-24 lg:px-8"><div className="mx-auto max-w-4xl"><SectionHeading eyebrow="Questions answered" title="A few things worth knowing" center /><div className="mt-10 space-y-3">{faqs.map(f => <details key={f.q} className="group rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold marker:hidden">{f.q}<span className="text-xl text-accent group-open:rotate-45">+</span></summary><p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">{f.a}</p></details>)}</div></div></section>; }
