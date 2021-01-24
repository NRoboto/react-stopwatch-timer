import { MouseEventHandler } from "react";

export type NavigationProps = {
  toggleTheme: () => void;
};

export type NavbarItemProps = {
  to?: string;
  onClick?: MouseEventHandler;
  children: any;
};

export type NavPeakProps = {
  collapsed: boolean;
};

export type NavMainBarProps = {
  collapsed: boolean;
  toggleCollapse: () => void;
  togglePeak: () => void;
  toggleTheme: () => void;
};

export type NavMainBarRightProps = {
  togglePeak: () => void;
  toggleTheme: () => void;
};

export type PeakPreviewParams = {
  togglePeak: () => void;
};

export type ThemeTogglerProps = {
  toggleTheme: () => void;
};
