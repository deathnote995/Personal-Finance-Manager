import { useState } from "react";
import { useThemeStore } from "../../stores/useThemeStore";
import type { AccentColor, Theme } from "../../stores/useThemeStore";
const accents: { name: AccentColor; color: string }[] = [
  { name: "orange", color: "#ea580c" }, { name: "blue", color: "#2563eb" },
  { name: "violet", color: "#7c3aed" }, { name: "emerald", color: "#059669" },
  { name: "rose", color: "#e11d48" },
];
const links = [{ label: "Features", href: "#features" }, { label: "Analytics", href: "#analytics" }, { label: "How it works", href: "#how-it-works" }, { label: "Security", href: "#security" }];
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useThemeStore(s => s.theme);
  const setTheme = useThemeStore(s => s.setTheme);
  const accentColor = useThemeStore(s => s.accentColor);
  const setAccentColor = useThemeStore(s => s.setAccentColor);
  return <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/85">
    <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
      <a href="/" className="text-2xl font-black tracking-tight"><span className="text-accent">Coin</span>Flow<span className="text-accent">.</span></a>
      <div className="hidden items-center gap-7 lg:flex">{links.map(link => <a key={link.href} href={link.href} className="text-sm font-medium text-slate-600 hover:text-accent dark:text-slate-300">{link.label}</a>)}</div>
      <div className="flex items-center gap-2 sm:gap-3">
        <label className="sr-only" htmlFor="theme-select">Appearance</label>
        <select id="theme-select" value={theme} onChange={e => setTheme(e.target.value as Theme)} className="rounded-lg border border-slate-200 bg-white px-2 py-2 text-xs dark:border-slate-700 dark:bg-slate-900">
          <option value="system">System</option><option value="light">Light</option><option value="dark">Dark</option>
        </select>
        <a href="/login" className="hidden text-sm font-semibold hover:text-accent sm:block">Log in</a>
        <a href="/register" className="hidden rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-white hover:bg-accent-hover md:block">Get started</a>
        <button type="button" onClick={() => setMenuOpen(v => !v)} aria-expanded={menuOpen} aria-controls="mobile-nav" className="rounded-lg border border-slate-300 px-3 py-2 text-sm lg:hidden dark:border-slate-700">{menuOpen ? "Close" : "Menu"}</button>
      </div>
    </nav>
    <div className="mx-auto flex max-w-7xl items-center gap-2 px-5 pb-3 lg:px-8">
      <span className="mr-1 text-xs text-slate-500">Accent</span>
      {accents.map(a => <button key={a.name} type="button" title={a.name} aria-label={`Select ${a.name} accent`} aria-pressed={accentColor === a.name} onClick={() => setAccentColor(a.name)} style={{ backgroundColor: a.color }} className={`h-5 w-5 rounded-full ring-offset-2 ring-offset-white transition hover:scale-110 dark:ring-offset-slate-950 ${accentColor === a.name ? "ring-2 ring-slate-500" : ""}`} />)}
    </div>
    {menuOpen && <div id="mobile-nav" className="space-y-4 border-t border-slate-200 px-5 py-5 lg:hidden dark:border-slate-800">{links.map(l => <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="block text-sm">{l.label}</a>)}<a href="/register" className="block font-semibold text-accent">Get started</a></div>}
  </header>;
}
