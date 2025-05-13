"use client";

import { ThemeProvider } from "../theme/themeContext";
import ThemeToggle from "./ThemeToggle";

export default function ClientThemeProvider({ children }) {
  return (
    <ThemeProvider>
      {children}
      <ThemeToggle />
    </ThemeProvider>
  );
}
