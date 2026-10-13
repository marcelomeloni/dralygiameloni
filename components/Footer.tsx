import {
  InstagramLogo,
  LinktreeLogo,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import {site, whatsappHref } from "@/lib/content";

async function getCurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

export default async function Footer() {
  const year = await getCurrentYear();

  return (
    <footer className="bg-sage-light px-5 pt-12 pb-8 sm:px-8 sm:pt-16">
      <div className="mx-auto w-full max-w-[1080px]">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="font-script text-[clamp(1.8rem,5vw,2.4rem)] leading-tight text-sage">
              {site.displayName}
            </p>
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-ink-soft">
              {site.specialty}
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-11 w-11 place-items-center rounded-full bg-sage text-cream transition-transform duration-200 hover:-translate-y-0.5"
            >
              <InstagramLogo size={20} weight="light" aria-hidden="true" />
            </a>
            <a
              href={whatsappHref}
              aria-label="WhatsApp"
              className="grid h-11 w-11 place-items-center rounded-full bg-sage text-cream transition-transform duration-200 hover:-translate-y-0.5"
            >
              <WhatsappLogo size={20} weight="light" aria-hidden="true" />
            </a>
       
          </div>
        </div>

        <div className="mt-8 grid gap-3.5 border-t border-ink/15 pt-6 text-center text-[0.78rem] text-ink-soft">
          <p>CRM/RQE {site.crm}</p>
    
     
          <p>
            © {year} {site.fullName}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
