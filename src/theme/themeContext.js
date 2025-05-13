"use client";

import { createContext, useState, useContext, useMemo } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline"; // Updated import
import { lightTheme, darkTheme } from "./theme"; // Your original light theme

// Create context
const ThemeContext = createContext();

// Custom hook to use theme
export const useTheme = () => useContext(ThemeContext);

// Theme provider component
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode

  // Toggle function
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    // Optional: Save preference to localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("darkMode", !isDarkMode);
    }
  };

  // Initialize from saved preference if available (client-side only)
  useMemo(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("darkMode");
      if (savedMode !== null) {
        setIsDarkMode(savedMode === "true");
      }
    }
  }, []);

  // Select the active theme based on isDarkMode
  const activeTheme = useMemo(
    () => (isDarkMode ? darkTheme : lightTheme),
    [isDarkMode]
  );

  // Context value
  const value = useMemo(() => ({ isDarkMode, toggleTheme }), [isDarkMode]);

  return (
    <ThemeContext.Provider value={value}>
      <MuiThemeProvider theme={activeTheme}>
        <CssBaseline /> {/* Normalizes styles */}
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
