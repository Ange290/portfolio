import { useState, useEffect } from "react";

export default function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const fn = () => {
      const el = document.documentElement;
      const pct = (window.scrollY / (el.scrollHeight - el.clientHeight)) * 100;
      setWidth(Math.min(pct, 100));
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return <div id="scroll-progress" style={{ width: `${width}%` }} aria-hidden />;
}
