export type Theme = 'dark' | 'light';

export type Msg = { role: 'user' | 'assistant'; text: string };

export interface NavItem {
  code: string;
  label: string;
  href: string;
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
  videoRef: React.RefObject<HTMLVideoElement | null>;
  loading: boolean;
  displayedProgress: number;
}

export interface VideoPlayPauseProps {
  paused: boolean;
  togglePause: () => void;
}

export interface Module {
  title: string;
  items: string[];
}

export interface Benefit {
  code: string;
  title: string;
  subtitle: string;
}

export interface NewsItem {
  date: string;
  title: string;
  excerpt: string;
  link: string;
}

export interface Port {
  name: string;
  description: string;
}

export interface Stat {
  label: string;
  sublabel: string;
  value: string;
  description: string;
}

export interface PcsFeature {
  title: string;
  description: string;
}

export interface PcsValue {
  title: string;
  description: string;
}

export interface UserType {
  title: string;
  description: string;
}
