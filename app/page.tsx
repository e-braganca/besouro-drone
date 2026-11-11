import { About } from "@/components/site/about"
import { Conditions } from "@/components/site/conditions"
import { Contact } from "@/components/site/contact"
import { Fleet } from "@/components/site/fleet"
import { Hero } from "@/components/site/hero"
import { Marquee } from "@/components/site/marquee"
import { Packages } from "@/components/site/packages"
import { Pilot } from "@/components/site/pilot"
import { Portfolio } from "@/components/site/portfolio"
import { Services } from "@/components/site/services"
import { SiteFooter, WhatsAppFab } from "@/components/site/site-footer"
import { SiteHeader } from "@/components/site/site-header"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Portfolio />
        <Fleet />
        <Services />
        <Packages />
        <Conditions />
        <Pilot />
        <Contact />
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </>
  )
}
