/**
 * Conteúdo da Besouro Drone — extraído da Tabela Comercial 2026.
 * Para atualizar preços, serviços ou contatos, edite apenas este arquivo.
 */

export const contact = {
  whatsappDisplay: "(31) 98960-4128",
  whatsappNumber: "5531989604128",
  instagram: "besouro_drone",
  email: "calgusto@hotmail.com",
  region: "Belo Horizonte e região",
}

export function whatsappLink(
  message = "Olá! Vim pelo site da Besouro Drone e gostaria de solicitar um orçamento."
) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export const instagramLink = `https://instagram.com/${contact.instagram}`
export const emailLink = `mailto:${contact.email}?subject=${encodeURIComponent(
  "Orçamento — Besouro Drone"
)}`

export const navItems = [
  { href: "#portfolio", label: "Portfólio" },
  { href: "#frota", label: "Frota" },
  { href: "#servicos", label: "Serviços" },
  { href: "#pacotes", label: "Pacotes" },
  { href: "#condicoes", label: "Condições" },
  { href: "#piloto", label: "O piloto" },
]

export type Service = {
  name: string
  scope: string
  price: string
  /** Exibe "a partir de" antes do valor */
  from?: boolean
}

export const besourinhoServices: Service[] = [
  {
    name: "Captação de até 1 hora",
    scope:
      "Sessão de imagens aéreas; entrega dos arquivos originais selecionados.",
    price: "R$ 650",
  },
  {
    name: "Captação de até 2 horas",
    scope: "Sessão ampliada de imagens aéreas.",
    price: "R$ 900",
  },
  {
    name: "Fotografias aéreas",
    scope:
      "Captação e seleção de fotografias; tratamento avançado não incluído.",
    price: "R$ 750",
  },
  {
    name: "Imóvel com vídeo curto",
    scope:
      "Captação de imagens para apresentação do imóvel; edição orçada à parte.",
    price: "R$ 950",
  },
  {
    name: "Terreno ou empreendimento",
    scope: "Captação aérea para divulgação e apresentação do local.",
    price: "R$ 900",
  },
  {
    name: "Vídeo promocional para empresa",
    scope: "Captação de material aéreo para uso comercial; edição à parte.",
    price: "R$ 1.200",
  },
]

export const besouraoServices: Service[] = [
  {
    name: "Captação de até 1 hora",
    scope: "Captação com perspectivas imersivas e criativas.",
    price: "R$ 850",
  },
  {
    name: "Captação de até 2 horas",
    scope: "Sessão ampliada para projeto audiovisual.",
    price: "R$ 1.200",
  },
  {
    name: "Vídeo promocional",
    scope: "Captação de material para vídeo promocional; edição à parte.",
    price: "R$ 1.400",
  },
  {
    name: "Captação para publicidade",
    scope: "Imagens para campanhas, divulgação e apresentação de marcas.",
    price: "R$ 1.500",
  },
  {
    name: "Projeto audiovisual especial",
    scope: "Escopo personalizado conforme briefing e condições de operação.",
    price: "R$ 1.800",
    from: true,
  },
]

export const institutionalServices: Service[] = [
  {
    name: "Captação institucional — até 2h",
    scope: "Registro aéreo institucional.",
    price: "R$ 1.200",
  },
  {
    name: "Captação institucional — até 4h",
    scope: "Sessão ampliada de registro.",
    price: "R$ 1.800",
  },
  {
    name: "Diária de captação — até 8h",
    scope: "Captação ao longo de uma diária, conforme plano aprovado.",
    price: "R$ 2.800",
  },
  {
    name: "Registro fotográfico de obras",
    scope: "Imagens para documentação e comunicação da evolução da obra.",
    price: "R$ 1.400",
  },
  {
    name: "Vídeo institucional",
    scope: "Captação de imagens aéreas; edição não incluída.",
    price: "R$ 2.000",
  },
  {
    name: "Acompanhamento mensal de obras",
    scope: "Até 4 visitas mensais, com datas e entregas combinadas.",
    price: "R$ 4.000",
  },
  {
    name: "Cobertura audiovisual de evento",
    scope: "Captação aérea, sujeita à viabilidade e autorizações.",
    price: "R$ 1.800",
    from: true,
  },
]

export type Package = {
  name: string
  summary: string
  price: string
  includes: string[]
  featured?: boolean
}

export const packages: Package[] = [
  {
    name: "Dupla Perspectiva",
    summary: "Captação com os dois equipamentos, conforme briefing.",
    price: "R$ 1.400",
    includes: [
      "Besourinho + Besourão no mesmo projeto",
      "Roteiro de captação conforme briefing",
    ],
  },
  {
    name: "Comercial",
    summary:
      "Captação com os dois equipamentos e organização do material para edição.",
    price: "R$ 1.800",
    includes: [
      "Besourinho + Besourão no mesmo projeto",
      "Roteiro de captação conforme briefing",
      "Material organizado para edição",
    ],
  },
  {
    name: "Premium",
    summary:
      "Captação com os dois equipamentos, fotos selecionadas e material audiovisual organizado.",
    price: "R$ 2.200",
    includes: [
      "Besourinho + Besourão no mesmo projeto",
      "Roteiro de captação conforme briefing",
      "Fotos selecionadas",
      "Material audiovisual organizado",
    ],
    featured: true,
  },
]

export const conditions = [
  {
    id: "tempo",
    title: "Tempo de serviço",
    text: "Contado a partir do horário e local previamente combinados. Tempo adicional será orçado antes da execução.",
  },
  {
    id: "deslocamento",
    title: "Deslocamento",
    text: "Os valores consideram atendimento em Belo Horizonte e região próxima. Deslocamentos maiores, estacionamento, pedágios e despesas especiais podem ser cobrados à parte, sempre informados previamente.",
  },
  {
    id: "clima",
    title: "Clima e segurança",
    text: "A operação poderá ser reagendada quando condições meteorológicas, ambientais ou operacionais não permitirem voo seguro.",
  },
  {
    id: "entregas",
    title: "Entregas",
    text: "Quantidade, formato, resolução, prazo e forma de disponibilização dos arquivos são definidos na proposta de cada trabalho.",
  },
  {
    id: "uso",
    title: "Uso das imagens",
    text: "Finalidade e direitos de utilização comercial são definidos no orçamento ou contrato.",
  },
  {
    id: "pagamento",
    title: "Pagamento",
    text: "Condições, sinal, vencimento e forma de pagamento são definidos na proposta aprovada.",
  },
  {
    id: "publico",
    title: "Serviços públicos",
    text: "Valores sujeitos ao escopo, termo de referência, exigências de habilitação e procedimento de contratação do órgão.",
  },
] as const
