const address =
  "Rua Salvador Corrêa, 603 — Sala 11-1, Edifício Ondina Maris, Jardim Vergueiro";
const city = "Sorocaba - SP";

export const site = {
  displayName: "Dra. Lygia Meloni",
  fullName: "Dra. Lygia Meloni Costa",
  specialty: "Pediatria Integrativa / Neonatologia",
  instagram: {
    handle: "@dra.lygiameloni",
    url: "https://www.instagram.com/dra.lygiameloni/",
  },
  linktree: "https://linktr.ee/dralygiamelonipediatra",
  whatsapp: "5515997793504",
  maps: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${address}, ${city}`)}`,
  email: "",
  address,
  hours: "8h às 18h",
  crm: "172905",
  rqe: {
    pediatria: "94082",
    neonatologia: "940821",
  },
  city,
  photo: {
    src: "/profissional.jpg",
    alt: "Dra. Lygia Meloni, pediatra neonatologista",
  },
  aboutPhoto: {
    src: "/sobre.jpg",
    alt: "Dra. Lygia Meloni, pediatra neonatologista e pediatra integrativa",
  },
} as const;

export const registration = `CRM ${site.crm} · RQE ${site.rqe.pediatria} (Pediatria) · RQE ${site.rqe.neonatologia} (Neonatologia)`;

export const isPlaceholder = (value: string) => value.startsWith("[");

export const whatsappHref = isPlaceholder(site.whatsapp)
  ? "#contato"
  : `https://wa.me/${site.whatsapp.replace(/\D/g, "")}`;

export const mapsHref = isPlaceholder(site.maps) ? "#contato" : site.maps;

export const nav = [
  { label: "Home", anchor: "#home" },
  { label: "Como posso te ajudar?", anchor: "#como-posso-ajudar" },
  { label: "Quem sou eu", anchor: "#quem-sou-eu" },
  { label: "Contato", anchor: "#contato" },
] as const;

export type HelpIconKey =
  | "integrativa"
  | "neonatologia"
  | "salaDeParto"
  | "preNatal"
  | "amamentacao"
  | "sono";

export const helpCards: ReadonlyArray<{
  icon: HelpIconKey;
  title: string;
  text: string;
}> = [
  {
    icon: "integrativa",
    title: "Pediatria Integrativa",
    text: "Um cuidado que olha o bebê e a criança como um todo, no corpo e no afeto.",
  },
  {
    icon: "neonatologia",
    title: "Neonatologia",
    text: "Acompanhamento próximo do recém-nascido e da família desde os primeiros dias.",
  },
  {
    icon: "salaDeParto",
    title: "Sala de parto",
    text: "A recepção do bebê no nascimento, com presença cuidadosa e tranquila.",
  },
  {
    icon: "preNatal",
    title: "Consulta pré-natal",
    text: "Um encontro com o pediatra antes do nascimento, para chegar com mais segurança.",
  },
  {
    icon: "amamentacao",
    title: "Amamentação e alimentação",
    text: "Orientações acolhedoras para a amamentação e para cada fase da alimentação.",
  },
  {
    icon: "sono",
    title: "Sono e cuidados com o bebê",
    text: "Dicas leves e realistas sobre sono, rotina e cuidados do dia a dia.",
  },
];

export const values = ["Profissional", "Sensível", "Acolhedor", "Alegre"] as const;

export const bio = [
  "Sou pediatra neonatologista e pediatra integrativa. Escolhi cuidar de bebês e crianças olhando para cada família por inteiro, com escuta, ciência e acolhimento.",
  "Acompanho o recém-nascido desde a sala de parto, passando pelo pré-natal com o pediatra, a amamentação, o sono e cada etapa do crescimento, sempre no tempo e no ritmo de cada bebê.",
  "Aqui você encontra informação clara para cuidar com confiança. ",
] as const;

export const contactButtons = [
  {
    icon: "instagram" as const,
    label: "CLIQUE PARA SEGUIR",
    href: site.instagram.url,
  },
  {
    icon: "whatsapp" as const,
    label: "FALE COMIGO",
    href: whatsappHref,
  },
  {
    icon: "mapPin" as const,
    label: "ME FAÇA UMA VISITA",
    href: mapsHref,
  },
];
