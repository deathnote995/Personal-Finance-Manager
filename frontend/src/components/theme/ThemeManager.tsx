import { useEffect } from "react";
import { useThemeStore } from "../../stores/useThemeStore";
export default function ThemeManager() {
 const theme = useThemeStore(s => s.theme);
 const accentColor = useThemeStore(s => s.accentColor);
 useEffect(() => { const root = document.documentElement; const mq = window.matchMedia("(prefers-color-scheme: dark)"); const apply = () => root.classList.toggle("dark", theme === "dark" || (theme === "system" && mq.matches)); apply(); mq.addEventListener("change",apply); return () => mq.removeEventListener("change",apply); }, [theme]);
 useEffect(() => { document.documentElement.dataset.accent = accentColor; }, [accentColor]);
 return null;
}
