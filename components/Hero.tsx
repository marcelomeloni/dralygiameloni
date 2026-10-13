import Image from "next/image";
import { Heart, InstagramLogo, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import { site, whatsappHref } from "@/lib/content";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-5 pt-12 pb-16 sm:px-8 sm:pt-16 sm:pb-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-hearts opacity-45 [mask-image:linear-gradient(to_bottom,black_55%,transparent)]" />
      <Heart
        className="pointer-events-none absolute -right-12 -bottom-20 z-0 h-auto w-[clamp(220px,34vw,420px)] text-rose opacity-15"
        weight="thin"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[1080px] items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
        <Reveal>
          <h1 className="mb-6">
            <Image
              src="/logon.svg"
              alt={`${site.displayName} — ${site.specialty}`}
              width={842}
              height={216}
              priority
              unoptimized
              className="h-auto w-[min(100%,22rem)] sm:w-[min(100%,34rem)]"
            />
          </h1>
          <p className="my-6 max-w-[34rem] text-[clamp(1rem,2.6vw,1.08rem)] text-ink-soft">
            Cuidar do seu bebê e da sua família desde o nascimento, com um olhar
            integral, atento e acolhedor para cada fase.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <Button href={whatsappHref}>
              <WhatsappLogo size={18} weight="light" aria-hidden="true" />
              Fale comigo
            </Button>
       
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative mx-auto aspect-[4/5] max-w-[340px] overflow-hidden rounded-[28px] border border-sage-light bg-sage-light lg:max-w-none">
            <Image
              src={site.photo.src}
              alt={site.photo.alt}
              fill
              priority
              sizes="(min-width: 1024px) 435px, 340px"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
