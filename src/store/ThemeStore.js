import { create } from "zustand";

export const useThemeStore = create((set, get) => ({
  mode: localStorage.getItem("mode") || "light",

  toggleMode: () => {
    const currentMode = get().mode;

    const newMode = currentMode === "light" ? "dark" : "light";

    localStorage.setItem("mode", newMode);

    set({ mode: newMode });

    console.log("New Mode:", newMode);
  },
}));