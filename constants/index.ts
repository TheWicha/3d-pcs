import type { Chip, NavItem } from '@/types';

export const ACCENT = 'var(--accent)';
export const ACCENT_HEX = '#00edc2';

export const CHIPS: Chip[] = [
  { label: 'Sprawdź status MSKU7834521' },
  { label: 'Gdzie jest mój kontener?' },
  { label: 'Jak wygląda kolejka w porcie?' },
];

export const MOCK: Record<string, string> = {
  'Sprawdź status MSKU7834521':
    '📦 Kontener **MSKU7834521** · Terminal T2, nabrzeże 7\n— Status: **Oczekuje na rozładunek**\n— Szac. czas operacji: 3–4 h\n— Armator: Maersk Line · Przyjazd: 27.04.2026',
  'Gdzie jest mój kontener?':
    'Podaj numer kontenera (np. MSKU7834521) lub numer B/L, a sprawdzę aktualną lokalizację. Aktualnie monitoruję **3 421** jednostek w ruchu.',
  'Jak wygląda kolejka w porcie?':
    '🚛 Brama wjazdowa: **12 pojazdów** · czas oczekiwania ~25 min\n— Terminal T1: bez opóźnień ✓\n— Terminal T2: spowolnienie +45 min ⚠\n— Dane odświeżone: 28.04.2026 · 14:32',
};

export const FALLBACK_REPLY =
  'Rozumiem pytanie. Trwa przetwarzanie — zaraz wrócę z odpowiedzią systemu portowego.';

export const NAV_ITEMS: NavItem[] = [
  { code: '01', label: 'O nas' },
  { code: '02', label: 'Moduł Towarowy' },
  { code: '03', label: 'Moduł Maklerski' },
  { code: '04', label: 'Kontakt' },
];
