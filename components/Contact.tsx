import type { Icon } from "@phosphor-icons/react";
import {
  InstagramLogo,
  MapPin,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import { contactButtons, site } from "@/lib/content";

const icons: Record<string, Icon> = {
  instagram: InstagramLogo,
  whatsapp: WhatsappLogo,
  mapPin: MapPin,
};

export default function Contact() {
  return (
    <section
      id="contato"
      className="bg-sage-light px-5 py-16 sm:px-8 sm:py-24"
    >
      <div className="mx-auto w-full max-w-[1080px]">
        <div className="mx-auto max-w-[42rem] text-center">
      
          <h2 className="mt-2 text-[clamp(1.55rem,3.4vw,2.2rem)] font-semibold leading-tight text-ink">
            Vamos conversar sobre o seu bebê?
          </h2>
          <p className="mx-auto mt-4 max-w-[38rem] text-ink-soft">
            Escolha por onde prefere falar comigo. Será um prazer acompanhar
            você e sua família nesse começo.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-[860px] gap-4 sm:grid-cols-3">
          {contactButtons.map((button, index) => {
            const ButtonIcon = icons[button.icon];
            const external = button.href.startsWith("http");
            return (
              <Reveal key={button.label} delay={index * 70}>
                <Button
                  variant="contact"
                  href={button.href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <ButtonIcon size={18} weight="light" aria-hidden="true" />
                  {button.label}
                </Button>
              </Reveal>
            );
          })}
        </div>

        <div className="mx-auto mt-10 grid max-w-[42rem] gap-2.5 text-center text-[0.9rem] text-ink-soft">
          <p>Endereço: {site.address}</p>
          <p>Horários de atendimento: {site.hours}</p>
          <p>
      
          </p>
        </div>
      </div>
    </section>
  );
}
