import Image from "next/image"
import { Check, ShieldCheck } from "lucide-react"

import cesar from "@/assets/cesar-augusto.webp"
import { Eyebrow } from "@/components/site/section-heading"
import { Viewfinder } from "@/components/site/viewfinder"

const compliance = [
  "Certificado de piloto emitido pela ANAC",
  "Cadastro e homologação dos equipamentos",
  "Autorizações de acesso ao espaço aéreo",
  "Seguro, quando exigido",
]

/** Foto do Cesar em moldura de visor. Para trocar, substitua `assets/cesar-augusto.webp`. */
function PilotPhoto() {
  return (
    <figure className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl bg-background ring-1 ring-primary/30">
      <Image
        src={cesar}
        alt="Cesar Augusto segurando o controle do drone no alto de uma serra, ao pôr do sol"
        fill
        placeholder="blur"
        sizes="(min-width: 448px) 28rem, 100vw"
        className="object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-28 bg-linear-to-b from-black/55 to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black/75 to-transparent"
      />
      <Viewfinder className="inset-5" />

      <div
        aria-hidden
        className="absolute inset-x-9 top-9 flex justify-between font-mono text-[11px] tracking-[0.2em] text-white/85 uppercase"
      >
        <span className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-red-500 motion-safe:animate-blink" />
          REC
        </span>
        <span>Piloto 01</span>
      </div>

      <figcaption className="absolute inset-x-9 bottom-9 flex justify-between font-mono text-[11px] tracking-[0.2em] text-white/85 uppercase">
        <span>Cesar Augusto</span>
        <span className="text-primary">ANAC</span>
      </figcaption>
    </figure>
  )
}

export function Pilot() {
  return (
    <section
      id="piloto"
      className="flight-grid relative border-t border-border bg-card/40"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="reveal lg:col-span-5">
            <PilotPhoto />
          </div>

          <div className="reveal lg:col-span-7">
            <Eyebrow index="07">Quem pilota</Eyebrow>
            <h2 className="mt-5 font-display text-7xl leading-[0.82] font-extrabold tracking-tight uppercase italic md:text-9xl">
              Cesar
              <br />
              <span className="text-primary">Augusto</span>
            </h2>
            <p className="mt-5 font-mono text-sm tracking-[0.15em] text-muted-foreground uppercase">
              Piloto de drone certificado pela ANAC
            </p>

            {/* Texto de apresentação — revise e complemente com a história do Cesar. */}
            <div className="mt-8 max-w-2xl space-y-4 text-lg text-pretty text-muted-foreground">
              <p>
                Por trás de cada voo da Besouro Drone está o Cesar Augusto,
                piloto com certificado emitido pela ANAC e experiência prática
                na produção de conteúdo audiovisual — com vídeos próprios para
                redes sociais que chegaram a 600 mil visualizações.
              </p>
              <p>
                Cada captação é planejada conforme a necessidade do cliente, com
                equipamentos próprios e atenção às exigências de cada local e
                tipo de voo.
              </p>
            </div>

            <div className="mt-10 rounded-2xl border border-border bg-background/80 p-6 md:p-8">
              <div className="flex items-center gap-3">
                <ShieldCheck className="size-6 text-primary" />
                <h3 className="font-display text-2xl leading-none font-bold uppercase italic">
                  Qualificações e conformidade
                </h3>
              </div>
              <p className="mt-3 text-muted-foreground">
                Antes de cada operação, são verificadas as exigências aplicáveis
                ao equipamento, ao local e ao tipo de voo.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {compliance.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
