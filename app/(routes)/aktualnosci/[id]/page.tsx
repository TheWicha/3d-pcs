import { NEWS } from '@/constants';
import { notFound } from 'next/navigation';

async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const article = NEWS.find(item => item.link === `/aktualnosci/${id}`);

  if (!article) {
    notFound();
  }

  return (
    <section className="py-20">
      <article className="max-w-180 mx-auto px-6">
        <time className="font-mono text-[12px] tracking-widest text-(--fg-2) block mb-4 uppercase">
          {article.date}
        </time>

        <h1 className="font-michroma font-normal text-[clamp(24px,3.2vw,40px)] tracking-[0.02em] text-foreground mt-0 mb-6 leading-[1.2]">
          {article.title}
        </h1>

        <p className="text-[18px] leading-[1.7] text-(--fg-2) m-0">{article.excerpt}</p>
      </article>
    </section>
  );
}

export default page;
