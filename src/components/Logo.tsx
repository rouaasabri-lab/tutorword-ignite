import logoAsset from "@/assets/algebrix-logo-horizontal.png.asset.json";

export function Logo({ className }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="Algebrix"
      className={className || "h-16 w-auto shrink-0"}
    />
  );
}

