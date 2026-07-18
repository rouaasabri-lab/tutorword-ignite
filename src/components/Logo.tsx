import logoAsset from "@/assets/algebrix-logo.png.asset.json";

export function Logo({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="Algebrix"
      className={className || "h-9 w-auto shrink-0"}
      style={light ? undefined : undefined}
    />
  );
}
