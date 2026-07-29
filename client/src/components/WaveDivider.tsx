interface WaveDividerProps {
  color?: string;
  position?: "top" | "bottom";
  className?: string;
}

/**
 * Divisor SVG curvo suave para separar seções com elegância.
 * O `color` deve corresponder à cor de fundo da seção DESTINO.
 */
export default function WaveDivider({
  color = "var(--background)",
  position = "bottom",
  className = "",
}: WaveDividerProps) {
  const isTop = position === "top";

  return (
    <div
      className={`relative w-full overflow-hidden leading-[0] ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="block w-full h-[40px] md:h-[60px]"
        style={{ transform: isTop ? "rotate(180deg)" : "none" }}
      >
        <path
          d="M0,40 C240,80 480,0 720,30 C960,60 1200,10 1440,40 L1440,80 L0,80 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
