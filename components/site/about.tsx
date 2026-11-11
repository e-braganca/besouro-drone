import Image from "next/image"
import {
  Briefcase,
  Clapperboard,
  HardHat,
  House,
  Landmark,
  PartyPopper,
} from "lucide-react"

import logo from "@/assets/logo-besouro-drone-transparente.webp"
import { SectionHeading } from "@/components/site/section-heading"

const audiences = [
  { icon: House, label: "Imobiliárias" },
  { icon: HardHat, label: "Construtoras" },
  { icon: Briefcase, label: "Empresas" },
  { icon: PartyPopper, label: "Eventos" },
  { icon: Clapperboard, label: "Projetos institucionais" },
  { icon: Landmark, label: "Órgãos públicos" },
]

export function About() {
  return (
    <section
      id="sobre"
      className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-32"
    >
      <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="reveal relative mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-md">
          <div
            aria-hidden
            className="absolute inset-[14%] rounded-full bg-primary/25 blur-3xl"
          />
          <Image
            src={logo}
            alt="Logo da Besouro Drone: um besouro-drone verde com a inscrição “Vista de cima, outro nível!”"
            sizes="(min-width: 1024px) 28rem, 24rem"
            className="relative"
          />
        </div>

        <div className="lg:col-span-7">
          <SectionHeading
            index="01"
            eyebrow="Apresentação"
            title={
              <>
                Captação aérea com{" "}
                <span className="text-primary">planejamento</span> e olhar de
                criador de conteúdo.
              </>
            }
          >
            <p>
              A Besouro Drone oferece serviços de captação de imagens aéreas
              para imobiliárias, construtoras, empresas, eventos, projetos
              institucionais e órgãos públicos. O trabalho combina equipamentos
              próprios, experiência prática na criação de conteúdo e
              planejamento de captação conforme a necessidade de cada cliente.
            </p>
          </SectionHeading>

          <div className="reveal mt-10 flex flex-col gap-5 rounded-2xl border border-border bg-card/60 p-6 sm:flex-row sm:items-center sm:gap-8 md:p-8">
            <p className="shrink-0 font-display text-7xl leading-none font-extrabold tracking-tight whitespace-nowrap text-primary uppercase italic md:text-8xl">
              600<span className="text-4xl md:text-5xl"> mil</span>
            </p>
            <div>
              <p className="text-lg font-medium text-foreground">
                visualizações em vídeos do portfólio próprio para redes sociais.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                O resultado demonstra experiência com produção e publicação de
                conteúdo, sem representar garantia de alcance para projetos de
                clientes.
              </p>
            </div>
          </div>
        </div>
      </div>

      <ul className="mt-16 grid grid-cols-2 border-t border-l border-border md:mt-24 md:grid-cols-3 lg:grid-cols-6">
        {audiences.map(({ icon: Icon, label }) => (
          <li
            key={label}
            className="reveal group flex flex-col gap-6 border-r border-b border-border p-5 transition-colors hover:bg-card md:p-6"
          >
            <Icon className="size-6 text-primary transition-transform group-hover:-translate-y-0.5" />
            <span className="font-display text-xl leading-tight font-bold uppercase italic md:text-2xl">
              {label}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
