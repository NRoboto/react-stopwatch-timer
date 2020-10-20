export type NavigationProps = {
  toggleTheme: () => void;
};

export type NavbarItemProps = {
  to: string;
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
