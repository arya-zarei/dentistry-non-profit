import { useEffect, useState } from "react";
import type { PropsWithChildren } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { MessageWidget } from "./MessageWidget";

export function AppLayout({ children }: PropsWithChildren) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="site-shell">
      <div className="site-backdrop" />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>{children}</main>
      <Footer />
      <MessageWidget />
    </div>
  );
}
