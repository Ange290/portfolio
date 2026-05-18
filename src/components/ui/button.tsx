import { cn } from "../../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg" | "icon";
  asChild?: boolean;
}

export function Button({
  className,
  variant = "default",
  size = "md",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        variant === "default" && "bg-foreground text-background hover:bg-foreground/90",
        variant === "outline" && "border border-border bg-transparent hover:bg-accent text-foreground",
        variant === "ghost" && "hover:bg-accent text-muted-foreground hover:text-foreground",
        variant === "link" && "text-foreground underline-offset-4 hover:underline p-0 h-auto",
        size === "sm" && "h-8 px-3 text-xs",
        size === "md" && "h-9 px-4 text-sm",
        size === "lg" && "h-11 px-6 text-sm",
        size === "icon" && "h-9 w-9",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
