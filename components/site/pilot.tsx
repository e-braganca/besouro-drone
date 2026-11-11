import { Camera, Check, ShieldCheck } from "lucide-react"

import { Eyebrow } from "@/components/site/section-heading"
import { Viewfinder } from "@/components/site/viewfinder"

const compliance = [
  "Certificado de piloto emitido pela ANAC",
  "Cadastro e homologação dos equipamentos",
  "Autorizações de acesso ao espaço aéreo",
  "Seguro, quando exigido",
]

/**
 * Espaço reservado para a foto do Cesar.
 * Quando a foto estiver pronta: salve em `assets/cesar-augusto.jpg`, importe
 * (`import cesar from "@/assets/cesar-augusto.jpg"`) e troque este bloco por
 * <Image src={cesar} alt="Cesar Augusto, piloto da Besouro Drone" fill placeholder="blur"
 *   sizes="(min-width: 1024px) 28rem, 100vw" className="object-cover" />
 */
function PhotoPlaceholder() {
  return (
    <figure className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border border-dashed border-primary/45 bg-background/70">
      <div aria-hidden className="flight-grid absolute inset-0 opacity-70" />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-primary/10 to-transparent"
      />
      <Viewfinder className="inset-5" />

      <div
        aria-hidden
        className="absolute inset-x-9 top-9 flex justify-between font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase"
      >
        <span className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-red-500 motion-safe:animate-blink" />
          REC
        </span>
        <span>Piloto 01</span>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-10 text-center">
        <div className="flex size-24 items-center justify-center rounded-full border border-primary/40 bg-primary/10">
          <Camera className="size-9 text-primary" />
        </div>
        <p className="font-display text-2xl leading-none font-bold uppercase italic">
          Foto de Cesar Augusto
        </p>
        <p className="font-mono text-[11px] tracking-[0.15em] text-muted-foreground uppercase">
          Espaço reservado · proporção 4:5
        </p>
      </div>

      <figcaption className="absolute inset-x-9 bottom-9 flex justify-between font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
        <span>Cesar Augusto</span>
        <span>ANAC</span>
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
            <PhotoPlaceholder />
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
