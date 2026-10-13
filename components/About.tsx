import Image from "next/image";
import { InstagramLogo, SealCheck } from "@phosphor-icons/react/dist/ssr";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import { bio, registration, site, values } from "@/lib/content";

export default function About() {
  return (
    <section
      id="quem-sou-eu"
      className="relative overflow-hidden px-5 py-16 sm:px-8 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-hearts opacity-40" />

      <div className="relative z-10 mx-auto grid w-full max-w-[1080px] items-center gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <Reveal>
          <div className="relative mx-auto aspect-[4/5] max-w-[340px] overflow-hidden rounded-[28px] border border-sage-light bg-cream lg:max-w-none">
            <Image
              src={site.aboutPhoto.src}
              alt={site.aboutPhoto.alt}
              fill
              sizes="(min-width: 1024px) 435px, 340px"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
      
          <h2 className="mt-2 text-[clamp(1.55rem,3.4vw,2.2rem)] font-semibold leading-tight text-ink">
            Prazer, sou a{" "}
            <span className="font-script font-normal text-sage">
              {site.displayName}
            </span>
          </h2>

          <div className="mt-4 space-y-4 text-ink-soft">
            {bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <span className="mt-4 mb-5 inline-flex items-center gap-2 rounded-full border border-sage px-4 py-2 text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-sage">
            <SealCheck size={16} weight="light" aria-hidden="true" />
            {registration}
          </span>

          <ul className="mb-6 flex list-none flex-wrap gap-2.5">
            {values.map((value) => (
              <li
                key={value}
                className="rounded-full bg-sage-light px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink"
              >
                {value}
              </li>
            ))}
          </ul>

      
        </Reveal>
      </div>
    </section>
  );
}
