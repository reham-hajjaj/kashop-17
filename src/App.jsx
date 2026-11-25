import { RouterProvider } from "react-router";
import router from "./router.jsx";
import { ToastContainer } from "react-toastify";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import getTheme from "./theme.js";

import {
  ThemeProvider,
  CssBaseline,
} from "@mui/material";

import { useThemeStore } from "./store/ThemeStore.js";
import { useEffect } from "react";
import { useLanguageStore } from "./store/LanguageStore.js";

import i18next from "i18next";

const queryClient = new QueryClient();

function App() {
  const mode = useThemeStore((state) => state.mode);
  const language = useLanguageStore((state) => state.language);

  const theme = getTheme(mode);

  useEffect(() => {
    i18next.changeLanguage(language);
    document.documentElement.dir = language=="ar"?"rtl":"ltr";
    document.documentElement.lang=language
  }, [language]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ToastContainer />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;