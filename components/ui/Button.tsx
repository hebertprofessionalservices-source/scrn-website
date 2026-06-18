import Link from "next/link";

type ButtonVariant = "primary" | "outline" | "gold" | "ghost";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-scrn-red text-white hover:bg-scrn-red-bright active:scale-95 glow-red-sm hover:glow-red",
  outline:
    "border border-white/40 text-white hover:border-white hover:bg-white/10 active:scale-95",
  gold:
    "bg-vv-gold text-vv-navy font-semibold hover:bg-vv-gold-light active:scale-95",
  ghost:
    "text-scrn-silver hover:text-white hover:bg-white/10 active:scale-95",
};

const base =
  "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm tracking-widest uppercase font-sans font-medium transition-all duration-200 cursor-pointer select-none";

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  external = false,
  type = "button",
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return external ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    ) : (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
