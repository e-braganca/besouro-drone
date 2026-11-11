import Image, { type StaticImageData } from "next/image"

import arenaMrv from "@/assets/photos/arena-mrv.webp"
import bairroSerra from "@/assets/photos/bairro-serra.webp"
import estradaDeTerra from "@/assets/photos/estrada-de-terra.webp"
import mataECidade from "@/assets/photos/mata-e-cidade.webp"
import obra from "@/assets/photos/obra-catedral.webp"
import ouroPreto from "@/assets/photos/ouro-preto.webp"
import { SectionHeading } from "@/components/site/section-heading"
import { Viewfinder } from "@/components/site/viewfinder"
import { cn } from "@/lib/utils"

type Shot = {
  image: StaticImageData
  alt: string
  title: string
  place: string
  tag: string
  className: string
  sizes: string
}

const shots: Shot[] = [
  {
    image: ouroPreto,
    alt: "Vista aérea do centro histórico de Ouro Preto, com casarões coloniais e montanhas ao fundo",
    title: "Centro histórico",
    place: "Ouro Preto · MG",
    tag: "Turismo",
    className: "md:col-span-4 md:row-span-2",
    sizes: "(min-width: 768px) 66vw, 100vw",
  },
  {
    image: arenaMrv,
    alt: "Fachada listrada em preto e branco da Arena MRV vista por drone",
    title: "Arena MRV",
    place: "Belo Horizonte · MG",
    tag: "Eventos",
    className: "md:col-span-2",
    sizes: "(min-width: 768px) 33vw, 100vw",
  },
  {
    image: obra,
    alt: "Obra de grande porte com torres de concreto, andaimes e guindaste vista do alto",
    title: "Registro de obra",
    place: "Acompanhamento",
    tag: "Construção",
    className: "md:col-span-2",
    sizes: "(min-width: 768px) 33vw, 100vw",
  },
  {
    image: estradaDeTerra,
    alt: "Drone seguindo um utilitário em estrada de terra ao entardecer",
    title: "Perseguição off-road",
    place: "Estrada de terra · MG",
    tag: "Automotivo",
    className: "md:col-span-2",
    sizes: "(min-width: 768px) 33vw, 100vw",
  },
  {
    image: bairroSerra,
    alt: "Bairro residencial de Belo Horizonte na encosta da serra, iluminado pelo sol da tarde",
    title: "Bairros e relevo",
    place: "Belo Horizonte · MG",
    tag: "Imobiliário",
    className: "md:col-span-2",
    sizes: "(min-width: 768px) 33vw, 100vw",
  },
  {
    image: mataECidade,
    alt: "Mata preservada em primeiro plano e prédios de Belo Horizonte ao pôr do sol",
    title: "Cidade e mata",
    place: "Belo Horizonte · MG",
    tag: "Empreendimentos",
    className: "md:col-span-2",
    sizes: "(min-width: 768px) 33vw, 100vw",
  },
]

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-32"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          index="02"
          eyebrow="Portfólio"
          title={
            <>
              Do alto, <span className="text-primary">tudo muda</span>.
            </>
          }
        />
        <p className="reveal max-w-sm text-muted-foreground">
          Frames reais de voos da Besouro Drone — de cidades históricas a obras,
          arenas e estradas de terra.
        </p>
      </div>

      <div className="mt-12 grid gap-3 md:auto-rows-[15rem] md:grid-cols-6 lg:auto-rows-[18rem]">
        {shots.map((shot, i) => (
          <figure
            key={shot.title}
            className={cn(
              "reveal group relative aspect-[16/10] overflow-hidden rounded-xl bg-card md:aspect-auto",
              shot.className
            )}
          >
            <Image
              src={shot.image}
              alt={shot.alt}
              fill
              placeholder="blur"
              sizes={shot.sizes}
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/25 via-35% to-transparent" />
            <Viewfinder
              size="sm"
              className="inset-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 md:p-6">
              <div>
                <p className="font-mono text-[11px] tracking-[0.2em] text-primary uppercase">
                  Voo {String(i + 1).padStart(2, "0")} · {shot.tag}
                </p>
                <p className="mt-1 font-display text-2xl leading-none font-extrabold text-white uppercase italic md:text-3xl">
                  {shot.title}
                </p>
              </div>
              <p className="shrink-0 font-mono text-[11px] tracking-[0.15em] text-white/70 uppercase">
                {shot.place}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
