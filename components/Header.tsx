"use client";

import { useState } from "react";
import Image from "next/image";
import { List, X, WhatsappLogo } from "@phosphor-icons/react";
import Button from "@/components/Button";
import { nav, site, whatsappHref } from "@/lib/content";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-sage-light bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex min-h-[104px] w-full max-w-[1080px] items-center gap-4 px-5 sm:min-h-[128px] sm:px-8">
        <a
          href="#home"
          className="flex items-center"
          aria-label={site.displayName}
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo.svg"
            alt={site.displayName}
            width={490}
            height={468}
            priority
            unoptimized
            className="h-20 w-auto sm:h-24"
          />
        </a>

        <nav
          className="ml-auto hidden items-center gap-6 lg:flex"
          aria-label="Navegação principal"
        >
          {nav.map((item) => (
            <a
              key={item.anchor}
              href={item.anchor}
              className="text-[0.74rem] font-semibold uppercase tracking-[0.12em] text-ink transition-colors hover:text-sage"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button
          href={whatsappHref}
          className="ml-1 hidden px-5 py-3 text-[0.7rem] lg:inline-flex"
        >
          <WhatsappLogo size={16} weight="light" aria-hidden="true" />
          WhatsApp
        </Button>

        <button
          type="button"
          className="ml-auto grid place-items-center rounded-xl border border-sage-light p-2 text-sage lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <X size={22} weight="light" aria-hidden="true" />
          ) : (
            <List size={22} weight="light" aria-hidden="true" />
          )}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-sage-light lg:hidden">
          <div className="mx-auto w-full max-w-[1080px] px-5 py-3 sm:px-8">
            <ul className="grid list-none gap-1">
              {nav.map((item) => (
                <li key={item.anchor}>
                  <a
                    href={item.anchor}
                    className="block px-1 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-ink"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <Button
                  href={whatsappHref}
                  className="mt-3 w-full"
                  onClick={() => setOpen(false)}
                >
                  <WhatsappLogo size={16} weight="light" aria-hidden="true" />
                  Fale comigo
                </Button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
