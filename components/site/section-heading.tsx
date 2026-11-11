import { cn } from "@/lib/utils"

export function Eyebrow({
  index,
  children,
  className,
}: {
  index: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-primary uppercase",
        className
      )}
    >
      <span>{index}</span>
      <span aria-hidden className="h-px w-8 bg-primary/60" />
      <span>{children}</span>
    </p>
  )
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  children,
  className,
}: {
  index: string
  eyebrow: string
  title: React.ReactNode
  children?: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("reveal max-w-3xl", className)}>
      <Eyebrow index={index}>{eyebrow}</Eyebrow>
      <h2 className="mt-5 font-display text-5xl leading-[0.88] font-extrabold tracking-tight text-balance uppercase italic md:text-7xl">
        {title}
      </h2>
      {children ? (
        <div className="mt-6 max-w-2xl text-lg text-pretty text-muted-foreground">
          {children}
        </div>
      ) : null}
    </div>
  )
}
