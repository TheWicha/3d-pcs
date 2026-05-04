import { ACCENT_HEX } from '@/constants';

export default function HeroBody() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
      <p
        className="font-mono text-[10px] tracking-[0.2em] uppercase mb-6 opacity-90"
        style={{ color: ACCENT_HEX }}
      >
        Polski PCS · Asystent AI
      </p>

      <h1 className="font-michroma font-normal text-[clamp(36px,6.5vw,96px)] leading-[0.9] tracking-[6px] uppercase text-foreground mt-0 mb-8">
        Cyfryzacja
        <br />
        <span className="text-(--fg-3)">polskich portów</span>
        <br />
        morskich<span style={{ color: ACCENT_HEX }}>.</span>
      </h1>

      <p className="font-sans text-[clamp(13px,1.4vw,16px)] leading-[1.6] tracking-[0.06em] text-(--fg-2) max-w-120 m-0">
        Sprawdź status kontenera, zapytaj o operacje portowe.
        <br />
        Bez infolinii. Bez logowania.
      </p>
    </div>
  );
}
