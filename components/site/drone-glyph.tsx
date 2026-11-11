import { cn } from "@/lib/utils"

/**
 * Silhueta de drone vista de cima, com hélices girando.
 * "compact" = Besourinho (DJI Neo 2) · "immersive" = Besourão (DJI Avata 360)
 */
export function DroneGlyph({
  variant = "compact",
  className,
}: {
  variant?: "compact" | "immersive"
  className?: string
}) {
  const immersive = variant === "immersive"
  const reach = immersive ? 56 : 50
  const rotor = immersive ? 32 : 26
  const rotors = [
    [100 - reach, 100 - reach],
    [100 + reach, 100 - reach],
    [100 - reach, 100 + reach],
    [100 + reach, 100 + reach],
  ]

  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
      className={cn("overflow-visible", className)}
    >
      {rotors.map(([x, y], i) => (
        <g key={i}>
          <line
            x1={100}
            y1={100}
            x2={x}
            y2={y}
            strokeWidth={6}
            strokeLinecap="round"
            opacity={0.9}
          />
          <circle cx={x} cy={y} r={rotor} opacity={0.55} />
          {immersive ? (
            <circle cx={x} cy={y} r={rotor + 6} opacity={0.25} />
          ) : null}
          <g
            className="origin-center [transform-box:fill-box] motion-safe:animate-rotor"
            style={{ animationDuration: `${0.28 + i * 0.03}s` }}
          >
            <line
              x1={x - rotor + 5}
              y1={y}
              x2={x + rotor - 5}
              y2={y}
              strokeWidth={3}
              strokeLinecap="round"
            />
          </g>
          <circle cx={x} cy={y} r={3.5} fill="currentColor" stroke="none" />
        </g>
      ))}
      <rect
        x={immersive ? 78 : 82}
        y={immersive ? 70 : 74}
        width={immersive ? 44 : 36}
        height={immersive ? 60 : 52}
        rx={14}
        className="fill-background"
        strokeWidth={2.5}
      />
      {/* câmera */}
      <circle
        cx={100}
        cy={immersive ? 82 : 86}
        r={immersive ? 7 : 5}
        fill="currentColor"
        stroke="none"
      />
      {immersive ? (
        <circle
          cx={100}
          cy={118}
          r={7}
          fill="currentColor"
          stroke="none"
          opacity={0.6}
        />
      ) : null}
    </svg>
  )
}
