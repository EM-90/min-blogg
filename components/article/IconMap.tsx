import {
  Palette,
  FileText,
  Code,
  CaseSensitive,
  Smartphone,
  BrainCircuit,
  ChartPie,
  Wrench,
  Speech,
  HelpCircle,
  Monitor,
} from "lucide-react";

export const iconKeys = [
  "palette",
  "file-text",
  "code",
  "case-sensitive",
  "smartphone",
  "brain-circuit",
  "chart-pie",
  "wrench",
  "speech",
  "monitor",
] as const;

export type IconKey = (typeof iconKeys)[number];

export function isIconKey(value: unknown): value is IconKey {
  return (
    typeof value === "string" && (iconKeys as readonly string[]).includes(value)
  );
}

/** 3) Samme map som før, men basert på IconKey */
const ICON_MAP: Record<
  IconKey,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  palette: Palette,
  "file-text": FileText,
  code: Code,
  "case-sensitive": CaseSensitive,
  smartphone: Smartphone,
  "brain-circuit": BrainCircuit,
  "chart-pie": ChartPie,
  wrench: Wrench,
  speech: Speech,
  monitor: Monitor,
};

/**
 * Render ikon fra en iconKey (fra Sanity). Faller tilbake til HelpCircle hvis ukjent.
 * Nå kan du trygt sende inn string | null | undefined.
 */
export function IconFromKey({
  iconKey,
  className,
  "aria-label": ariaLabel,
}: {
  iconKey?: string | null;
  className?: string;
  "aria-label"?: string;
}) {
  /** 4) Bruk type guard i stedet for type-cast (ENDRING) */
  if (!isIconKey(iconKey)) {
    return (
      <HelpCircle
        className={className}
        aria-label={ariaLabel}
        aria-hidden={ariaLabel ? undefined : true}
      />
    );
  }

  const Icon = ICON_MAP[iconKey];

  return (
    <Icon
      className={className}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
    />
  );
}
