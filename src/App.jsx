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

const queryClient = new QueryClient();

function App() {
  const mode = useThemeStore((state) => state.mode);

  const theme = getTheme(mode);

  console.log("mode:", mode);
  console.log(`theme: ${theme.palette.primary.main}`);

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