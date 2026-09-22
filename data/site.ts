const whatsappMessage =
  "Olá! Vim pelo site da Physis Therapeia e gostaria de saber mais sobre o atendimento.";

export const siteConfig = {
  name: "Physis Therapeia",
  professional: "Gabriella",
  slogan: "Fisioterapia que te entende.",
  description:
    "Atendimento fisioterapêutico individualizado, com foco em compreender sua rotina, seu corpo e a origem do desconforto para definir uma abordagem adequada às suas necessidades.",
  phone: "5541996935557",
  phoneDisplay: "(41) 99693-5557",
  whatsappMessage,
  whatsappUrl: `https://wa.me/5541996935557?text=${encodeURIComponent(whatsappMessage)}`,
  instagramHandle: "@physis_therapeia_",
  instagramUrl: "https://instagram.com/physis_therapeia_",
  // TODO: adicionar o domínio definitivo somente após o registro e a configuração de DNS.
  domain: "",
  previewUrl: "https://physis-therapeia.davidbudeli.chatgpt.site",
  // TODO: preencher quando a cliente confirmar o endereço de atendimento.
  address: null,
  developer: {
    name: "HyperAG",
    url: "",
  },
} as const;

export const navigation = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Serviços", href: "/servicos" },
  { label: "Como funciona", href: "/#como-funciona" },
  { label: "Contato", href: "/contato" },
] as const;

export const siteUrl = siteConfig.domain || siteConfig.previewUrl;
