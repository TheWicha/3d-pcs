import type { Benefit, Chip, Module, NavItem, NewsItem, PcsFeature, PcsValue, Port, Stat, UserType } from '@/types';

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
  { code: '01', label: 'O nas', href: '#about-heading' },
  { code: '02', label: 'Moduły', href: '#modules-heading' },
  { code: '03', label: 'Aktualności', href: '#news-heading' },
  { code: '04', label: 'Kontakt', href: '#kontakt' },
];

export const PARTNERS: string[] = [
  'Partner 1',
  'Partner 2',
  'Partner 3',
  'Partner 4',
  'Partner 5',
];

export const MODULES: Module[] = [
  {
    title: 'Moduł Towarowy',
    items: ['Eksport Towarów', 'Instrukcja T2L', 'Import Towarów'],
  },
  {
    title: 'Moduł Maklerski',
    items: ['Informacje', 'Zgłoszenia', 'FAQ', 'Planner', 'Funkcjonalności'],
  },
];

export const PCS_VALUES: PcsValue[] = [
  { title: 'Digitalizacja', description: 'Elektroniczna forma procesów portowych' },
  { title: 'Bezpieczeństwo', description: 'Sprawny i bezpieczny łańcuch dostaw' },
  { title: 'Ochrona środowiska', description: 'Redukcja emisji CO₂ przez cyfryzację' },
  { title: 'Efektywność', description: 'Optymalizacja procesów transportowych' },
];

export const PCS_FEATURES: PcsFeature[] = [
  {
    title: 'Identyfikacja procesów',
    description:
      'Głównym zadaniem Systemu PCS jest identyfikacja i automatyzowanie podstawowych procesów biznesowych w portach i otoczeniu portowym.',
  },
  {
    title: 'Zarządzanie informacją',
    description:
      'Zarządzanie informacjami przy imporcie i eksporcie towarów oraz wspomaganie wymiany dokumentów i informacji celnych.',
  },
  {
    title: 'Bezpieczna wymiana danych',
    description:
      'Jeden, zaufany kanał wymiany danych pomiędzy wszystkimi uczestnikami społeczności portowej.',
  },
  {
    title: 'Efektywność operacji',
    description:
      'Skrócenie czasu obsługi dokumentów i odpraw — szybsze decyzje i mniej przestojów w łańcuchu dostaw.',
  },
];

export const BENEFITS: Benefit[] = [
  { code: '01', title: 'Zmniejszenie opóźnień', subtitle: 'w ruchu ładunkowym' },
  { code: '02', title: 'Zwiększenie efektywności', subtitle: 'w procesach biznesowych portu' },
  { code: '03', title: 'Płynny przepływ danych', subtitle: 'elektronicznych pomiędzy partnerami' },
  { code: '04', title: 'Zwiększenie jakości', subtitle: 'udostępnionych informacji' },
  { code: '05', title: 'Redukcja emisji CO₂', subtitle: 'przez usprawnienie procesów logistycznych' },
  { code: '06', title: 'Poprawa koordynacji', subtitle: 'wykorzystania infrastruktury portowej' },
];

export const NEWS: NewsItem[] = [
  {
    date: '30 sty 2026',
    title: 'Zmiany organizacyjne w Zachodniopomorskim Urzędzie Celno-Skarbowym w Szczecinie',
    excerpt:
      'Z dniem 1 lutego 2026 będzie funkcjonować jedno Centrum Urzędowego Dokonywania Odpraw — CUDO Oddział Celny w Szczecinie.',
  },
  {
    date: '26 lis 2025',
    title: 'Zgłaszanie towarów',
    excerpt:
      'W związku ze zmianą systemu operacyjnego w BCT Gdynia zmianie uległa numeracja deklaracji magazynowych.',
  },
  {
    date: '02 wrz 2025',
    title: 'Zaproszenie do złożenia ofert',
    excerpt:
      'Zarząd Spółki zaprasza do złożenia oferty w postępowaniu na wybór firmy audytorskiej do badania rocznych sprawozdań finansowych.',
  },
];

export const USER_TYPES: UserType[] = [
  {
    title: 'Port morski',
    description: 'Obiekt gospodarczy usytuowany na styku lądu z morzem, przygotowany technicznie i organizacyjnie do obsługi obrotów handlu morskiego oraz środków transportu morskiego i lądowego.',
  },
  {
    title: 'Terminal morski',
    description: 'Wydzielony teren w porcie morskim, wyposażony w infrastrukturę do przeładunku, manipulacji i składowania towarów przewożonych drogą morską.',
  },
  {
    title: 'Armator',
    description: 'Osoba, która we własnym imieniu uprawia żeglugę statkiem morskim własnym lub cudzym.',
  },
  {
    title: 'Operator portowy',
    description: 'Firma świadcząca usługi przeładunku towaru w porcie morskim, posiadająca dostęp do terenów i infrastruktury portowej.',
  },
  {
    title: 'Przewoźnik drogowy',
    description: 'Przedsiębiorca uprawniony do wykonywania działalności gospodarczej w zakresie transportu drogowego.',
  },
  {
    title: 'Przewoźnik kolejowy',
    description: 'Przedsiębiorca uprawniony do wykonywania przewozów kolejowych na podstawie licencji, jednolitego certyfikatu bezpieczeństwa lub świadectwa bezpieczeństwa.',
  },
  {
    title: 'Agencja celna',
    description: 'Przedsiębiorstwo świadczące profesjonalne usługi pośrednictwa w zakresie reprezentowania podmiotów przed organami celnymi.',
  },
  {
    title: 'Administracja państwowa',
    description: 'System podmiotów wyposażonych w kompetencje do prowadzenia organizatorskiej i kierowniczej działalności na podstawie ustaw, np. KAS, Inspekcja Weterynaryjna.',
  },
];

export const PORTS: Port[] = [
  {
    name: 'Port Szczecin-Świnoujście',
    description:
      'Port morski i rzeczny, usytuowany nad Odrą. Razem z portem w Świnoujściu tworzy największy kompleks portowy na południowym Bałtyku.',
  },
  {
    name: 'Port Gdańsk',
    description:
      'Port morski położony w Gdańsku nad Zatoką Gdańską na Martwej Wiśle. Jeden z największych bałtyckich portów.',
  },
  {
    name: 'Port Gdynia',
    description:
      'Port morski na Pobrzeżu Kaszubskim. Trzeci co do wielkości port morski w Polsce, specjalizujący się w przeładunkach kontenerów.',
  },
];

export const STATS: Stat[] = [
  {
    label: 'Obsłużone',
    sublabel: 'kontenery',
    value: '2.4M+',
    description: 'Kontenerów obsłużonych rocznie w systemie PCS dla polskich portów',
  },
  {
    label: 'Skrócenie',
    sublabel: 'czasu odpraw',
    value: '42%',
    description: 'Mniej opóźnień dzięki zautomatyzowanej wymianie danych',
  },
  {
    label: 'Aktywni',
    sublabel: 'użytkownicy',
    value: '850+',
    description: 'Firm i instytucji korzysta z platformy Polskiego PCS',
  },
  {
    label: 'Dostępność',
    sublabel: 'systemu',
    value: '99.9%',
    description: 'Gwarantowany SLA uptime przez 24/7/365 obsługę procesów portowych',
  },
  {
    label: 'Redukcja',
    sublabel: 'emisji CO₂',
    value: '18k t',
    description: 'Ton CO₂ zaoszczędzonych rocznie dzięki cyfryzacji dokumentów',
  },
  {
    label: 'Zintegrowane',
    sublabel: 'systemy',
    value: '25+',
    description: 'Połączeń z systemami celnymi, terminalowymi i administracyjnymi',
  },
];
