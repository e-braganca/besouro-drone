"use client"

import * as React from "react"
import Image from "next/image"
import { ArrowUpRight, Menu } from "lucide-react"

import logo from "@/assets/logo-besouro-drone.webp"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { navItems, whatsappLink } from "@/lib/site"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [scrolled, setScrolled] = React.useState(false)
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled
          ? "border-border bg-background/80 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 md:h-20 md:px-8">
        <a
          href="#inicio"
          className="flex items-center gap-3"
          aria-label="Besouro Drone — início"
        >
          <span className="relative size-10 shrink-0 overflow-hidden rounded-full bg-black ring-1 ring-primary/40 md:size-11">
            <Image
              src={logo}
              alt=""
              fill
              sizes="44px"
              className="scale-110 object-cover"
            />
          </span>
          <span className="font-display text-xl leading-none font-extrabold tracking-tight uppercase italic md:text-2xl">
            Besouro <span className="text-primary">Drone</span>
          </span>
        </a>

        <nav
          aria-label="Principal"
          className="hidden items-center gap-1 lg:flex"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "hidden h-10 px-4 font-semibold sm:inline-flex"
            )}
          >
            Solicitar orçamento
            <ArrowUpRight data-icon="inline-end" />
          </a>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon-lg"
                  className="lg:hidden"
                  aria-label="Abrir menu"
                />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[86vw] bg-background">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <SheetDescription className="sr-only">
                Navegação do site
              </SheetDescription>
              <nav aria-label="Menu móvel" className="mt-16 flex flex-col px-6">
                {navItems.map((item, i) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 border-b border-border py-4 font-display text-3xl font-bold uppercase italic transition-colors hover:text-primary"
                  >
                    <span className="font-mono text-xs text-primary not-italic">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className="mt-auto p-6">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-12 w-full text-base font-semibold"
                  )}
                >
                  Solicitar orçamento
                  <ArrowUpRight data-icon="inline-end" />
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
