import { cn } from "@/lib/utils"

/** Cantoneiras de enquadramento, como no visor de uma câmera de drone. */
export function Viewfinder({
  className,
  size = "md",
}: {
  className?: string
  size?: "sm" | "md"
}) {
  const arm =
    size === "sm" ? "size-5 border-[1.5px]" : "size-8 md:size-10 border-2"

  return (
    <div aria-hidden className={cn("pointer-events-none absolute", className)}>
      <span
        className={cn(
          arm,
          "absolute top-0 left-0 border-r-0 border-b-0 border-primary"
        )}
      />
      <span
        className={cn(
          arm,
          "absolute top-0 right-0 border-b-0 border-l-0 border-primary"
        )}
      />
      <span
        className={cn(
          arm,
          "absolute bottom-0 left-0 border-t-0 border-r-0 border-primary"
        )}
      />
      <span
        className={cn(
          arm,
          "absolute right-0 bottom-0 border-t-0 border-l-0 border-primary"
        )}
      />
    </div>
  )
}
