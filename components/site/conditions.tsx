import {
  Clock,
  CloudSun,
  CreditCard,
  FileBadge,
  Landmark,
  MapPin,
  Package,
  type LucideIcon,
} from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SectionHeading } from "@/components/site/section-heading"
import { conditions } from "@/lib/site"

const icons: Record<(typeof conditions)[number]["id"], LucideIcon> = {
  tempo: Clock,
  deslocamento: MapPin,
  clima: CloudSun,
  entregas: Package,
  uso: FileBadge,
  pagamento: CreditCard,
  publico: Landmark,
}

export function Conditions() {
  return (
    <section
      id="condicoes"
      className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-32"
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
          <SectionHeading
            index="06"
            eyebrow="Condições comerciais"
            title={
              <>
                Tudo combinado{" "}
                <span className="text-primary">antes do voo</span>.
              </>
            }
          >
            <p>
              Tempo, deslocamento, clima, entregas e pagamento ficam claros na
              proposta — você aprova sabendo exatamente o que está contratando.
            </p>
          </SectionHeading>
        </div>

        <div className="lg:col-span-7">
          <Accordion
            defaultValue={["tempo"]}
            className="border-t border-border"
          >
            {conditions.map((condition, i) => {
              const Icon = icons[condition.id]
              return (
                <AccordionItem
                  key={condition.id}
                  value={condition.id}
                  className="border-b border-border"
                >
                  <AccordionTrigger className="items-center py-6 hover:no-underline **:data-[slot=accordion-trigger-icon]:size-5 **:data-[slot=accordion-trigger-icon]:text-primary">
                    <span className="flex items-center gap-4 md:gap-5">
                      <span className="w-6 font-mono text-xs text-muted-foreground">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <Icon className="size-5 shrink-0 text-primary" />
                      <span className="font-display text-2xl leading-none font-bold uppercase italic md:text-3xl">
                        {condition.title}
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pl-[4.25rem] text-base text-pretty text-muted-foreground md:pl-[4.75rem]">
                    {condition.text}
                  </AccordionContent>
                </AccordionItem>
              )
            })}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
