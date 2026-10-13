import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { whatsappHref } from "@/lib/content";

export default function FloatingWhatsApp() {
  return (
    <a
      className="fixed right-5 bottom-5 z-[60] grid h-[58px] w-[58px] place-items-center rounded-full bg-rose-strong text-cream shadow-[0_12px_34px_rgba(62,75,58,0.08)] transition-transform duration-200 hover:scale-105"
      href={whatsappHref}
      aria-label="Falar no WhatsApp"
    >
      <WhatsappLogo size={30} weight="light" aria-hidden="true" />
    </a>
  );
}
