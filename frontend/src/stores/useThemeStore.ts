import { create } from "zustand"
import { persist } from "zustand/middleware"

type Theme="light"|"dark"|"system"
type AccentColor="orange"|"blue"|"violet"|"emerald"|"rose"

interface ThemeStore{
    theme:Theme
    accentColor:AccentColor

    setTheme:(theme:Theme)=>void
    setAccentColor:(color:AccentColor)=>void
}

export const useThemeStore=create<ThemeStore>()(
    persist(
        set=>({
            theme:"system",
            accentColor:"orange",
            setTheme:theme=>set({theme}),
            setAccentColor:accentColor=>set({accentColor})
        }),
        {
            name:"coinflow-ui-preferances"
        }
    )
)