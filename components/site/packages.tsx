import { ArrowUpRight, Check, Scissors } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { SectionHeading } from "@/components/site/section-heading"
import { packages, whatsappLink } from "@/lib/site"
import { cn } from "@/lib/utils"

export function Packages() {
  return (
    <section
      id="pacotes"
      className="relative isolate overflow-hidden border-y border-border bg-card/40"
    >
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -z-10 h-[32rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"
      />
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-32">
        <SectionHeading
          index="05"
          eyebrow="Pacotes"
          title={
            <>
              Os dois besouros no{" "}
              <span className="text-primary">mesmo projeto</span>.
            </>
          }
        >
          <p>
            A combinação do Besourinho e do Besourão permite oferecer diferentes
            perspectivas no mesmo projeto. Os valores referem-se à captação;
            edição e pós-produção são orçadas separadamente.
          </p>
        </SectionHeading>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {packages.map((pkg) => (
            <Card
              key={pkg.name}
              className={cn(
                "reveal gap-0 rounded-2xl py-0 ring-border",
                pkg.featured
                  ? "bg-primary text-primary-foreground ring-primary md:-translate-y-4"
                  : "bg-background/85"
              )}
            >
              <div className="flex h-full flex-col p-7 md:p-8">
                <div className="flex items-center justify-between gap-3">
                  <p
                    className={cn(
                      "font-mono text-[11px] tracking-[0.25em] uppercase",
                      pkg.featured
                        ? "text-primary-foreground/70"
                        : "text-muted-foreground"
                    )}
                  >
                    Pacote
                  </p>
                  {pkg.featured ? (
                    <Badge className="bg-primary-foreground text-primary">
                      Mais completo
                    </Badge>
                  ) : null}
                </div>
                <h3 className="mt-3 font-display text-4xl leading-none font-extrabold uppercase italic md:min-h-[2em] md:text-5xl">
                  {pkg.name}
                </h3>
                <p
                  className={cn(
                    "mt-4 text-pretty md:min-h-[4.5rem]",
                    pkg.featured
                      ? "text-primary-foreground/80"
                      : "text-muted-foreground"
                  )}
                >
                  {pkg.summary}
                </p>

                <p className="mt-8 font-display text-6xl leading-none font-extrabold tracking-tight">
                  {pkg.price}
                </p>
                <p
                  className={cn(
                    "mt-2 font-mono text-[11px] tracking-[0.18em] uppercase",
                    pkg.featured
                      ? "text-primary-foreground/70"
                      : "text-muted-foreground"
                  )}
                >
                  Captação · edição à parte
                </p>

                <ul
                  className={cn(
                    "mt-8 space-y-3 border-t pt-6",
                    pkg.featured
                      ? "border-primary-foreground/20"
                      : "border-border"
                  )}
                >
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check
                        className={cn(
                          "mt-0.5 size-4 shrink-0",
                          pkg.featured
                            ? "text-primary-foreground"
                            : "text-primary"
                        )}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-10">
                  <a
                    href={whatsappLink(
                      `Olá! Tenho interesse no pacote ${pkg.name} da Besouro Drone. Pode me passar mais detalhes?`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({
                        size: "lg",
                        variant: pkg.featured ? "secondary" : "outline",
                      }),
                      "h-12 w-full text-base font-semibold",
                      pkg.featured &&
                        "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    )}
                  >
                    Quero este pacote
                    <ArrowUpRight data-icon="inline-end" />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="hazard reveal mt-16 rounded-2xl p-1.5 md:mt-20">
          <div className="flex flex-col gap-6 rounded-[calc(var(--radius-2xl)-4px)] bg-background p-7 md:flex-row md:items-center md:gap-10 md:p-10">
            <div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Scissors className="size-7" />
            </div>
            <div>
              <p className="font-mono text-xs tracking-[0.25em] text-primary uppercase">
                Edição e pós-produção
              </p>
              <h3 className="mt-2 font-display text-3xl leading-none font-extrabold uppercase italic md:text-4xl">
                Edição não inclusa nos valores de captação
              </h3>
              <p className="mt-4 max-w-3xl text-pretty text-muted-foreground">
                Montagem, trilha sonora, textos, correção de cor e versões para
                redes sociais são feitas por um parceiro especializado, com
                orçamento separado. O custo do editor é informado e aprovado por
                você antes do início da edição — fica claro o que é captação e o
                que é pós-produção, sem custos escondidos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
