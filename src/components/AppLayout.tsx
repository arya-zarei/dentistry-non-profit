import { useEffect, useState } from "react";
import type { PropsWithChildren } from "react";
import { useLocation } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { MessageWidget } from "./MessageWidget";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

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
      <ScrollToTop />
      <div className="site-backdrop" />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>{children}</main>
      <Footer />
      <MessageWidget />
    </div>
  );
}
