import { ArrowRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { DroneGlyph } from "@/components/site/drone-glyph"
import { SectionHeading } from "@/components/site/section-heading"

const fleet = [
  {
    unit: "01",
    name: "Besourinho",
    model: "DJI Neo 2",
    code: "Neo 2",
    variant: "compact" as const,
    description:
      "Captação aérea compacta para imóveis, terrenos, estabelecimentos e conteúdo comercial.",
    uses: ["Imóveis", "Terrenos", "Estabelecimentos", "Conteúdo comercial"],
    from: "R$ 650",
  },
  {
    unit: "02",
    name: "Besourão",
    model: "DJI Avata 360",
    code: "360",
    variant: "immersive" as const,
    description:
      "Perspectivas imersivas e criativas para vídeos promocionais e projetos audiovisuais.",
    uses: [
      "Vídeos promocionais",
      "Publicidade",
      "Projetos audiovisuais",
      "Voo imersivo",
    ],
    from: "R$ 850",
  },
]

export function Fleet() {
  return (
    <section
      id="frota"
      className="flight-grid relative border-y border-border bg-card/40"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-32">
        <SectionHeading
          index="03"
          eyebrow="Nossa frota"
          title={
            <>
              Dois besouros,{" "}
              <span className="text-primary">duas perspectivas</span>.
            </>
          }
        >
          <p>
            Cada equipamento tem um papel: o Besourinho para captação ágil e
            compacta, o Besourão para voos imersivos e criativos.
          </p>
        </SectionHeading>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {fleet.map((drone) => (
            <article
              key={drone.name}
              className="reveal group relative isolate overflow-hidden rounded-2xl border border-border bg-background/85 p-6 transition-colors hover:border-primary/50 md:p-10"
            >
              <span
                aria-hidden
                className="text-outline pointer-events-none absolute -right-3 -bottom-10 -z-10 font-display text-[9rem] leading-none font-extrabold uppercase italic md:text-[13rem]"
              >
                {drone.code}
              </span>

              <div className="flex items-start justify-between gap-6">
                <p className="font-mono text-xs tracking-[0.25em] text-muted-foreground uppercase">
                  Unidade {drone.unit}
                </p>
                <DroneGlyph
                  variant={drone.variant}
                  className="-mt-2 -mr-2 size-28 text-primary md:size-36"
                />
              </div>

              <h3 className="-mt-4 font-display text-6xl leading-[0.85] font-extrabold tracking-tight uppercase italic md:text-8xl">
                {drone.name}
              </h3>
              <p className="mt-3 font-mono text-sm tracking-[0.15em] text-primary uppercase">
                {drone.model}
              </p>
              <p className="mt-5 max-w-md text-lg text-pretty text-muted-foreground">
                {drone.description}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {drone.uses.map((use) => (
                  <li key={use}>
                    <Badge variant="outline" className="h-7 px-3 text-xs">
                      {use}
                    </Badge>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex items-end justify-between gap-4 border-t border-border pt-6">
                <div>
                  <p className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
                    Captação a partir de
                  </p>
                  <p className="mt-1 font-display text-4xl font-extrabold md:text-5xl">
                    {drone.from}
                  </p>
                </div>
                <a
                  href="#servicos"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
                >
                  Ver serviços
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
