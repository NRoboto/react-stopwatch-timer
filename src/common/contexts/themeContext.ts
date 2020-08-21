import React from "react";

export const ThemeLight = {
  bgPrimary: "bg-white",
  bgSecondary: "bg-light",
  textPrimary: "text-dark",
  textSecondary: "text-secondary",
  progress: "primary",
} as const;

export const ThemeDark = {
  bgPrimary: "bg-dark",
  bgSecondary: "bg-darkish",
  textPrimary: "text-light",
  textSecondary: "text-secondary",
  progress: "info",
} as const;

export const ThemeContext = React.createContext<
  typeof ThemeLight | typeof ThemeDark
>(ThemeLight);
