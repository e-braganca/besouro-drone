const items = [
  "Imóveis",
  "Terrenos",
  "Obras",
  "Empreendimentos",
  "Eventos",
  "Publicidade",
  "Turismo",
  "Institucional",
  "Redes sociais",
]

export function Marquee() {
  const loop = [...items, ...items, ...items, ...items]

  return (
    <section
      aria-label="Aplicações"
      className="relative overflow-hidden py-12 md:py-16"
    >
      <ul className="sr-only">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div
        aria-hidden
        className="scale-x-110 -rotate-2 bg-primary py-4 text-primary-foreground md:py-5"
      >
        <div className="flex w-max motion-safe:animate-marquee">
          {loop.map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-8 pr-8 font-display text-3xl font-extrabold whitespace-nowrap uppercase italic md:text-5xl"
            >
              {item}
              <svg
                viewBox="0 0 24 24"
                className="size-5 md:size-7"
                fill="currentColor"
              >
                <path d="M12 0 14.5 9.5 24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5z" />
              </svg>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
