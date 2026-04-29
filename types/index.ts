export type Theme = 'dark' | 'light';

export type Msg = { role: 'user' | 'assistant'; text: string };

export interface NavItem {
  code: string;
  label: string;
}

export interface Chip {
  label: string;
}

export interface GooeyTextProps {
  texts: string[];
  morphTime?: number;
  cooldownTime?: number;
  className?: string;
  style?: React.CSSProperties;
}

export interface BackgroundProps {
  overlay?: number;
}
