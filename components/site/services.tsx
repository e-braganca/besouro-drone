import { Info } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SectionHeading } from "@/components/site/section-heading"
import {
  besouraoServices,
  besourinhoServices,
  institutionalServices,
  type Service,
} from "@/lib/site"

const tabs = [
  {
    value: "besourinho",
    label: "Besourinho",
    detail: "DJI Neo 2",
    services: besourinhoServices,
  },
  {
    value: "besourao",
    label: "Besourão",
    detail: "DJI Avata 360",
    services: besouraoServices,
  },
  {
    value: "institucional",
    label: "Institucional",
    detail: "Prefeituras e órgãos públicos",
    services: institutionalServices,
    intro:
      "Atendimento a demandas de comunicação institucional, registro de obras, infraestrutura, turismo, espaços públicos e eventos. A contratação depende de escopo, documentação e procedimentos administrativos aplicáveis.",
  },
]

function ServiceList({ services }: { services: Service[] }) {
  return (
    <ul className="border-t border-border">
      {services.map((service, i) => (
        <li
          key={service.name}
          className="grid grid-cols-[2rem_minmax(0,1fr)_auto] items-baseline gap-x-3 gap-y-2 border-b border-border py-5 transition-colors hover:bg-card/70 md:grid-cols-[3rem_minmax(0,1fr)_minmax(0,1.3fr)_10rem] md:gap-x-8 md:px-4 md:py-6"
        >
          <span className="font-mono text-xs text-muted-foreground">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="font-display text-2xl leading-tight font-bold uppercase italic md:text-3xl">
            {service.name}
          </h3>
          <p className="col-span-2 col-start-2 row-start-2 text-muted-foreground md:col-span-1 md:col-start-auto md:row-start-auto">
            {service.scope}
          </p>
          <p className="col-start-3 row-start-1 text-right md:col-start-auto md:row-start-auto">
            {service.from ? (
              <span className="block font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                a partir de
              </span>
            ) : null}
            <span className="font-display text-2xl font-extrabold whitespace-nowrap text-primary md:text-4xl">
              {service.price}
            </span>
          </p>
        </li>
      ))}
    </ul>
  )
}

export function Services() {
  return (
    <section
      id="servicos"
      className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-32"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          index="04"
          eyebrow="Tabela 2026"
          title={
            <>
              Serviços e <span className="text-primary">investimento</span>
            </>
          }
        />
        <p className="reveal max-w-sm text-muted-foreground">
          Valores de referência para captação em Belo Horizonte e região. Edição
          e pós-produção são orçadas à parte.
        </p>
      </div>

      <Tabs defaultValue="besourinho" className="mt-12 gap-8">
        <TabsList className="grid h-auto w-full grid-cols-1 gap-1.5 rounded-xl bg-card p-1.5 group-data-horizontal/tabs:h-auto sm:grid-cols-3 md:w-fit">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="h-auto flex-col items-start gap-0.5 rounded-lg px-5 py-3 text-left data-active:bg-primary data-active:text-primary-foreground dark:data-active:border-transparent dark:data-active:bg-primary dark:data-active:text-primary-foreground"
            >
              <span className="font-display text-2xl leading-none font-extrabold uppercase italic">
                {tab.label}
              </span>
              <span className="font-mono text-[11px] tracking-[0.12em] uppercase opacity-75">
                {tab.detail}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map((tab) => (
          <TabsContent key={tab.value} value={tab.value} className="text-base">
            {tab.intro ? (
              <p className="mb-8 max-w-3xl rounded-xl border border-border bg-card/60 p-5 text-muted-foreground md:p-6">
                {tab.intro}
              </p>
            ) : null}
            <ServiceList services={tab.services} />
          </TabsContent>
        ))}
      </Tabs>

      <p className="mt-8 flex max-w-3xl items-start gap-3 text-sm text-muted-foreground">
        <Info className="mt-0.5 size-4 shrink-0 text-primary" />
        Valores indicativos, referentes à captação. Podem ser ajustados conforme
        briefing, local, duração, complexidade, autorizações e entregas.
        Orçamento final válido após aprovação formal.
      </p>
    </section>
  )
}
