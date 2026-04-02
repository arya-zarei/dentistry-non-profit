import { Link } from "react-router-dom";
import { navItems, socialLinks } from "../data/siteContent";
import { InstagramIcon, LinkedInIcon, ToothIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <span className="brand-mark footer-mark">
            <ToothIcon />
          </span>
          <div>
            <h2>smilesnonprofit</h2>
            <p>
              Placeholder dental non-profit content crafted for outreach, oral-health
              education, kits, and community care.
            </p>
          </div>
        </div>

        <div>
          <h3>Navigate</h3>
          <ul className="footer-list">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Connect</h3>
          <div className="footer-socials">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.href || "#"}
                className="footer-social-link"
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
          <p className="footer-note">Email routing can be enabled later through a form-service endpoint.</p>
        </div>
      </div>
    </footer>
  );
}
