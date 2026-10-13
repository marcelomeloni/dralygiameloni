import type { Metadata } from "next";
import { site } from "@/lib/content";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dra. Lygia Meloni | Pediatra Integrativa e Neonatologista",
  description:
    "Pediatria Integrativa e Neonatologia com cuidado acolhedor para bebês e famílias. [PREENCHER cidade]",
  icons: {
    icon: [{ url: "/logo.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Dra. Lygia Meloni | Pediatra Integrativa e Neonatologista",
    description:
      "Pediatria Integrativa e Neonatologia com cuidado acolhedor para bebês e famílias.",
    siteName: "Dra. Lygia Meloni",
    locale: "pt_BR",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: site.fullName,
  alternateName: site.displayName,
  medicalSpecialty: ["Pediatric", "Neonatology"],
  description:
    "Pediatra neonatologista e pediatra integrativa. Atendimento acolhedor para bebês, crianças e famílias. [PREENCHER cidade]",
  telephone: `+${site.whatsapp}`,
  email: site.email,
  sameAs: [site.instagram.url, site.linktree],
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address,
    addressLocality: site.city,
    addressCountry: "BR",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
