import { create } from "zustand";

export const useLanguageStore = create((set, get) => ({
  language: localStorage.getItem("language") || "en",

  toggleLanguage: () => {
    const newLanguage = get().language === "en" ? "ar" : "en";

    localStorage.setItem("language", newLanguage);

    set({ language: newLanguage });
  },
}));