// src/components/Footer.jsx
import { Mail, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-sm text-text-muted">
          © {year} Yash Wadve. All rights reserved.
        </p>

        {/* Socials repeated here, plus a Back to top link - kept light, no full nav/sitemap */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/yashwadve"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-text-muted transition-colors duration-200 hover:text-accent"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://linkedin.com/in/YOUR-LINKEDIN-HANDLE"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-text-muted transition-colors duration-200 hover:text-accent"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="mailto:your.email@example.com"
            aria-label="Email"
            className="text-text-muted transition-colors duration-200 hover:text-accent"
          >
            <Mail size={18} />
          </a>

          <Link
            to="hero"
            smooth
            duration={400}
            offset={-64}
            aria-label="Back to top"
            className="flex cursor-pointer items-center gap-1 text-sm font-medium text-text-muted transition-colors duration-200 hover:text-accent"
          >
            <ArrowUp size={16} />
            Top
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;