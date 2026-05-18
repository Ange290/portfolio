import { Separator } from "./ui/separator";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <Separator className="mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © 2025 Ange Uwizera
          </p>
          <p className="text-xs text-muted-foreground">
            Built with React · TypeScript · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
