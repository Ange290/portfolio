import { cn } from "../../lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "outline";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium transition-colors",
        variant === "default" && "bg-primary/10 text-primary border border-primary/20",
        variant === "secondary" && "bg-secondary text-secondary-foreground border border-border",
        variant === "outline" && "border border-border text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}
