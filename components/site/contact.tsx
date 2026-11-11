import { ArrowUpRight, AtSign, Mail, MessageCircle } from "lucide-react"

import { Eyebrow } from "@/components/site/section-heading"
import { contact, emailLink, instagramLink, whatsappLink } from "@/lib/site"
import { cn } from "@/lib/utils"

const channels = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: contact.whatsappDisplay,
    href: whatsappLink(),
    external: true,
    primary: true,
  },
  {
    icon: AtSign,
    label: "Instagram",
    value: `@${contact.instagram}`,
    href: instagramLink,
    external: true,
  },
  {
    icon: Mail,
    label: "E-mail",
    value: contact.email,
    href: emailLink,
  },
]

export function Contact() {
  return (
    <section id="contato" className="relative isolate overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,var(--lime-glow),transparent_65%)]"
      />
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-32">
        <div className="reveal flex flex-col items-center text-center">
          <Eyebrow index="08">Contato</Eyebrow>
          <h2 className="mt-5 max-w-5xl font-display text-[clamp(3rem,9vw,8rem)] leading-[0.85] font-extrabold tracking-tight text-balance uppercase italic">
            Solicite um orçamento{" "}
            <span className="text-primary">personalizado</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg text-pretty text-muted-foreground">
            Conte sobre o seu projeto e fale direto com o Cesar pelo canal que
            preferir. Atendimento em {contact.region}.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {channels.map(
            ({ icon: Icon, label, value, href, external, primary }) => (
              <a
                key={label}
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className={cn(
                  "reveal group flex min-h-48 flex-col justify-between gap-10 rounded-2xl border p-7 transition-[translate,border-color,background-color] duration-300 hover:-translate-y-1",
                  primary
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card/60 hover:border-primary/60"
                )}
              >
                <div className="flex items-center justify-between">
                  <Icon
                    className={cn("size-7", primary ? "" : "text-primary")}
                  />
                  <ArrowUpRight className="size-6 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <div>
                  <p
                    className={cn(
                      "font-mono text-[11px] tracking-[0.25em] uppercase",
                      primary
                        ? "text-primary-foreground/70"
                        : "text-muted-foreground"
                    )}
                  >
                    {label}
                  </p>
                  <p className="mt-2 font-display text-[1.7rem] leading-tight font-extrabold break-words md:text-3xl">
                    {value}
                  </p>
                </div>
              </a>
            )
          )}
        </div>
      </div>
    </section>
  )
}
