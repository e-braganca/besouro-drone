import Image from "next/image"
import { ArrowDown, ArrowUpRight } from "lucide-react"

import heroImage from "@/assets/photos/por-do-sol-bh.webp"
import { buttonVariants } from "@/components/ui/button"
import { Viewfinder } from "@/components/site/viewfinder"
import { whatsappLink } from "@/lib/site"
import { cn } from "@/lib/utils"

const stats = [
  { value: "02", label: "drones na frota" },
  { value: "600 mil", label: "views em vídeos próprios" },
  { value: "ANAC", label: "piloto certificado" },
  { value: "BH", label: "e região" },
]

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-svh flex-col overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src={heroImage}
          alt="Pôr do sol sobre Belo Horizonte, visto do alto por drone"
          fill
          preload
          placeholder="blur"
          sizes="100vw"
          className="object-cover motion-safe:animate-settle"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/25 via-45% to-transparent" />
        <div className="absolute inset-0 bg-linear-to-r from-background/75 via-background/15 via-55% to-transparent" />
        <div className="absolute inset-x-0 top-0 h-48 bg-linear-to-b from-black/60 to-transparent" />
      </div>

      {/* Visor: cantoneiras + telemetria */}
      <Viewfinder className="inset-x-4 top-20 bottom-4 md:inset-x-8 md:top-28 md:bottom-8" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-8 top-[6.5rem] flex justify-between font-mono text-[11px] tracking-[0.2em] text-white/80 uppercase md:inset-x-16 md:top-36"
      >
        <span className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-red-500 motion-safe:animate-blink" />
          REC
        </span>
        <span className="hidden sm:block">19°55′S · 43°56′W · ALT 120 m</span>
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute top-[40%] right-[16%] hidden size-16 -translate-y-1/2 xl:block"
      >
        <span className="absolute inset-0 rounded-full border border-white/25" />
        <span className="absolute top-1/2 -left-4 h-px w-6 bg-white/40" />
        <span className="absolute top-1/2 -right-4 h-px w-6 bg-white/40" />
        <span className="absolute -top-4 left-1/2 h-6 w-px bg-white/40" />
        <span className="absolute -bottom-4 left-1/2 h-6 w-px bg-white/40" />
      </div>

      <div className="mx-auto mt-auto w-full max-w-7xl px-8 pt-48 pb-10 md:px-16 md:pb-14">
        <p
          className="flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-primary uppercase motion-safe:animate-rise"
          style={{ animationDelay: "150ms" }}
        >
          <span aria-hidden className="h-px w-8 bg-primary" />
          Captação aérea · Belo Horizonte e região
        </p>
        <h1 className="mt-5 font-display text-[clamp(3.1rem,11.5vw,10.5rem)] leading-[0.82] font-extrabold tracking-tight uppercase italic">
          <span
            className="block motion-safe:animate-rise"
            style={{ animationDelay: "250ms" }}
          >
            Vista de cima,
          </span>
          <span
            className="block text-primary motion-safe:animate-rise"
            style={{ animationDelay: "380ms" }}
          >
            outro nível.
          </span>
        </h1>
        <p
          className="mt-7 max-w-xl text-lg text-pretty text-foreground/80 motion-safe:animate-rise md:text-xl"
          style={{ animationDelay: "520ms" }}
        >
          Imagens que mostram uma nova perspectiva para imobiliárias,
          construtoras, empresas, eventos, projetos institucionais e órgãos
          públicos.
        </p>
        <div
          className="mt-9 flex flex-col gap-3 motion-safe:animate-rise sm:flex-row"
          style={{ animationDelay: "650ms" }}
        >
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-13 px-7 text-base font-semibold shadow-[0_0_40px_-8px_var(--primary)]"
            )}
          >
            Solicitar orçamento
            <ArrowUpRight data-icon="inline-end" />
          </a>
          <a
            href="#servicos"
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "h-13 border-white/25 bg-black/20 px-7 text-base backdrop-blur-sm"
            )}
          >
            Ver serviços e valores
            <ArrowDown data-icon="inline-end" />
          </a>
        </div>

        <dl
          className="mt-14 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-white/15 pt-7 motion-safe:animate-rise md:grid-cols-4"
          style={{ animationDelay: "800ms" }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse">
              <dt className="mt-2 font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
                {stat.label}
              </dt>
              <dd className="font-display text-4xl leading-none font-extrabold uppercase italic md:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
