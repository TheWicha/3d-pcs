import { NEWS } from '@/constants';

function page() {
  return (
    <section className="py-20">
      <div className="max-w-300 mx-auto px-6">
        <h1 className="font-michroma font-normal text-[clamp(24px,3.2vw,40px)] tracking-[0.02em] text-foreground mt-0 mb-6">
          Aktualności
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {NEWS.map(item => (
            <article
              key={item.link}
              className="border border-(--border) bg-[color-mix(in_srgb,var(--surface)_86%,transparent)] p-7"
            >
              <time className="font-mono text-[12px] tracking-widest text-(--fg-2) block mb-3.5 uppercase">
                {item.date}
              </time>
              <h2 className="font-michroma font-normal text-[20px] tracking-[0.03em] text-foreground mt-0 mb-3 leading-[1.4]">
                {item.title}
              </h2>
              <p className="text-[16px] leading-[1.6] text-(--fg-2) m-0">{item.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default page;
