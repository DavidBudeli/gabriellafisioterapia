export type ServiceIcon = "release" | "tape" | "massage" | "drainage";

export type Service = {
  slug: string;
  name: string;
  eyebrow: string;
  icon: ServiceIcon;
  shortDescription: string;
  introduction: string;
  indications: string[];
  approach: string[];
  note: string;
};

export const services: Service[] = [
  {
    slug: "liberacao-miofascial",
    name: "Liberação miofascial",
    eyebrow: "Tensões e mobilidade",
    icon: "release",
    shortDescription:
      "Técnica manual direcionada a regiões de tensão, definida a partir da avaliação de cada pessoa.",
    introduction:
      "A liberação miofascial utiliza técnicas manuais sobre músculos e fáscias. Na Physis Therapeia, ela não é aplicada como uma fórmula pronta: primeiro são observadas a queixa, a rotina e as características do corpo.",
    indications: [
      "Pessoas com sensação de tensão ou rigidez muscular",
      "Praticantes de atividade física, amadores ou profissionais",
      "Quem realiza trabalho fisicamente exigente ou permanece muito tempo na mesma posição",
    ],
    approach: [
      "Conversa sobre a queixa, a rotina e o histórico",
      "Avaliação das regiões relacionadas ao desconforto",
      "Aplicação direcionada quando a técnica for adequada",
      "Orientações de acordo com o que foi observado",
    ],
    note:
      "A indicação e a resposta à técnica variam conforme as condições individuais de cada paciente.",
  },
  {
    slug: "kinesiotape",
    name: "Kinesiotape",
    eyebrow: "Suporte funcional",
    icon: "tape",
    shortDescription:
      "Aplicação de bandagem elástica funcional com objetivos definidos para cada necessidade.",
    introduction:
      "A kinesiotape é uma bandagem adesiva elástica utilizada como recurso complementar. Sua aplicação considera a estrutura envolvida, o objetivo terapêutico e a condição atual do paciente.",
    indications: [
      "Situações em que um suporte funcional pode ser útil",
      "Necessidades relacionadas à estabilização de estruturas",
      "Contextos em que se busca auxiliar a drenagem ou o cuidado de tecidos",
    ],
    approach: [
      "Identificação do objetivo da aplicação",
      "Avaliação da pele e da região a ser atendida",
      "Escolha do formato e da tensão adequados",
      "Orientação sobre cuidados e tempo de uso",
    ],
    note:
      "A bandagem é um recurso de apoio e não substitui avaliação, diagnóstico ou acompanhamento de outros profissionais quando necessários.",
  },
  {
    slug: "massagem-pontual",
    name: "Massagem pontual",
    eyebrow: "Cuidado direcionado",
    icon: "massage",
    shortDescription:
      "Atendimento focado em regiões específicas, guiado pela conversa, avaliação e palpação cuidadosa.",
    introduction:
      "A massagem pontual parte da escuta e da avaliação da região que incomoda. A palpação ajuda a compreender melhor os tecidos e a relação daquele ponto com a queixa apresentada.",
    indications: [
      "Desconfortos concentrados em uma região específica",
      "Pontos de tensão percebidos durante a rotina",
      "Pessoas que precisam de uma abordagem manual localizada",
    ],
    approach: [
      "Escuta do relato e do contexto do desconforto",
      "Palpação cuidadosa dos pontos relacionados",
      "Definição da abordagem manual mais adequada",
      "Orientação para a continuidade do cuidado",
    ],
    note:
      "O foco é compreender a necessidade da região, sem assumir que todo desconforto tem a mesma origem.",
  },
  {
    slug: "drenagem-linfatica",
    name: "Drenagem linfática",
    eyebrow: "Leveza e cuidado",
    icon: "drainage",
    shortDescription:
      "Massagem lenta e direcionada para situações relacionadas a inchaço e retenção de líquidos.",
    introduction:
      "A drenagem linfática utiliza movimentos suaves, lentos e direcionados. Antes do atendimento, é importante compreender o contexto do inchaço e verificar se a técnica é apropriada para aquele momento.",
    indications: [
      "Pessoas com sensação de inchaço ou retenção de líquidos",
      "Algumas condições que demandam cuidado com o fluxo linfático",
      "Gestantes, quando a técnica for apropriada e houver orientação profissional",
    ],
    approach: [
      "Conversa sobre histórico e condição atual",
      "Observação das regiões que precisam de atenção",
      "Movimentos lentos e direcionados",
      "Orientações compatíveis com cada situação",
    ],
    note:
      "Algumas condições exigem liberação ou acompanhamento médico. Cada caso é avaliado individualmente antes da aplicação.",
  },
];

export const futureTherapeuticResources = [
  "Laser terapêutico",
  "Ultrassom terapêutico",
  "Recursos de eletrotermofototerapia",
] as const;

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

