import { NavLink } from "react-router-dom";
import { navItems, socialLinks } from "../data/siteContent";
import { CloseIcon, InstagramIcon, LinkedInIcon, MenuIcon, ToothIcon } from "./Icons";

type HeaderProps = {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
};

export function Header({ menuOpen, setMenuOpen }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <NavLink className="brand" to="/" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">
            <ToothIcon />
          </span>
          <span>
            <strong>smilesnonprofit</strong>
          </span>
        </NavLink>

        <nav className="desktop-nav" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <div className="social-strip">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.href || "#"}
                className="social-link"
                aria-label={link.platform}
                onClick={(event) => {
                  if (!link.href) {
                    event.preventDefault();
                  }
                }}
              >
                {link.platform === "Instagram" ? <InstagramIcon /> : <LinkedInIcon />}
              </a>
            ))}
          </div>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={menuOpen ? "mobile-menu open" : "mobile-menu"}
        aria-hidden={!menuOpen}
      >
        <div className="container mobile-menu-inner">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => (isActive ? "mobile-nav-link active" : "mobile-nav-link")}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <div className="mobile-socials">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.href || "#"}
                className="social-link"
                onClick={(event) => {
                  if (!link.href) {
                    event.preventDefault();
                  }
                }}
              >
                {link.platform === "Instagram" ? <InstagramIcon /> : <LinkedInIcon />}
                <span>{link.platform}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
