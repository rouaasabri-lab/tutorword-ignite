import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";

export function PromoBar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const dismissed = localStorage.getItem("promo-bar-dismissed");
    if (dismissed) setVisible(false);
  }, []);

  const dismiss = () => {
    setVisible(false);
    localStorage.setItem("promo-bar-dismissed", "1");
  };

  if (!visible) return null;

  return (
    <div className="relative z-50 bg-promo text-promo-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6">
        <Link
          to="/pricing"
          className="flex flex-1 items-center justify-center gap-2 text-sm font-semibold hover:underline sm:text-base"
        >
          <span>🎓 New students get 15% off — claim your discount today!</span>
        </Link>
        <button
          onClick={dismiss}
          aria-label="Dismiss offer"
          className="ml-3 rounded-md p-1 transition-colors hover:bg-promo-foreground/10"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
