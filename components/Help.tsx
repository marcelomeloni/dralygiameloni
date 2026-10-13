import type { Icon } from "@phosphor-icons/react";
import {
  Baby,
  Drop,
  HandHeart,
  MoonStars,
  Stethoscope,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";
import Reveal from "@/components/Reveal";
import { helpCards, type HelpIconKey } from "@/lib/content";

const icons: Record<HelpIconKey, Icon> = {
  integrativa: HandHeart,
  neonatologia: Baby,
  salaDeParto: UsersThree,
  preNatal: Stethoscope,
  amamentacao: Drop,
  sono: MoonStars,
};

export default function Help() {
  return (
    <section
      id="como-posso-ajudar"
      className="bg-sage-light px-5 py-16 sm:px-8 sm:py-24"
    >
      <div className="mx-auto w-full max-w-[1080px]">
    
        <h2 className="mt-2 text-[clamp(1.55rem,3.4vw,2.2rem)] font-semibold leading-tight text-ink">
          Um cuidado que acompanha{" "}
          <span className="font-script font-normal text-sage">cada fase</span>
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {helpCards.map((card, index) => {
            const CardIcon = icons[card.icon];
            return (
              <Reveal key={card.title} delay={index * 70} className="h-full">
                <article className="flex h-full flex-col gap-3.5 rounded-[20px] border border-sage-light bg-cream p-6 transition duration-200 hover:-translate-y-1 hover:shadow-[0_12px_34px_rgba(62,75,58,0.08)]">
                  <span className="grid h-[54px] w-[54px] place-items-center rounded-full bg-sage text-cream">
                    <CardIcon size={26} weight="light" aria-hidden="true" />
                  </span>
                  <h3 className="text-[1.02rem] font-semibold text-ink">
                    {card.title}
                  </h3>
                  <p className="text-[0.9rem] leading-relaxed text-ink-soft">
                    {card.text}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
