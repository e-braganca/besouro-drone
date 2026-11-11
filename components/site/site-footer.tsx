import Image from "next/image"
import { MessageCircle } from "lucide-react"

import logo from "@/assets/logo-besouro-drone.webp"
import { Separator } from "@/components/ui/separator"
import { navItems, whatsappLink } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="border-t border-border pb-24 md:pb-0">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="flex items-center gap-4">
            <span className="relative size-16 shrink-0 overflow-hidden rounded-full bg-black ring-1 ring-primary/40">
              <Image
                src={logo}
                alt=""
                fill
                sizes="64px"
                className="scale-110 object-cover"
              />
            </span>
            <div>
              <p className="font-display text-3xl leading-none font-extrabold uppercase italic">
                Besouro <span className="text-primary">Drone</span>
              </p>
              <p className="mt-2 font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
                Imagens que mostram uma nova perspectiva
              </p>
            </div>
          </div>

          <nav
            aria-label="Rodapé"
            className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm text-muted-foreground"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <Separator className="my-10" />

        <p className="max-w-4xl text-xs leading-relaxed text-muted-foreground">
          Tabela de referência comercial — novembro de 2026. Os valores são
          indicativos e podem ser ajustados conforme briefing, local, duração,
          complexidade, autorizações e entregas. Orçamento final válido após
          aprovação formal.
        </p>
        <div className="mt-6 flex flex-col gap-2 font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase md:flex-row md:justify-between">
          <span>© 2026 Besouro Drone · Belo Horizonte e região</span>
          <span className="text-primary">Vista de cima, outro nível!</span>
        </div>
      </div>
    </footer>
  )
}

/** Botão flutuante de WhatsApp (só no celular). */
export function WhatsAppFab() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed right-4 bottom-4 z-40 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_10px_40px_-8px_var(--primary)] md:hidden"
    >
      <span
        aria-hidden
        className="absolute inset-0 rounded-full bg-primary opacity-40 motion-safe:animate-ping"
      />
      <MessageCircle className="relative size-6" />
    </a>
  )
}
