// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
    { to: "about", label: "About" },
    { to: "skills", label: "Skills" },
    { to: "projects", label: "Projects" },
    { to: "education", label: "Education" },
    { to: "certificates", label: "Certificates" },
    { to: "contact", label: "Contact" },
];

const NAVBAR_OFFSET = -64;

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("about");

    useEffect(() => {
        const handleScroll = () => {
            // Check header border state
            setIsScrolled(window.scrollY > 8);

            // Detect if the user is at the very bottom of the page
            const isBottom =
                window.innerHeight + window.scrollY >=
                document.documentElement.scrollHeight - 50;

            if (isBottom) {
                setActiveSection("contact");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header
            className={`fixed top-0 left-0 z-50 w-full bg-surface transition-colors duration-200 ${
                isScrolled ? "border-b border-border" : "border-b border-transparent"
            }`}
        >
            <nav className="mx-auto flex h-20 w-full max-w-[1800px] items-center justify-between px-8 md:px-12 lg:px-20">
                <Link
                    to="hero"
                    smooth
                    duration={400}
                    offset={NAVBAR_OFFSET}
                    onClick={closeMenu}
                    className="cursor-pointer font-heading text-4xl font-semibold text-text-primary"
                >
                    Yash Wadve
                </Link>

                <ul className="hidden items-center gap-8 md:flex">
                    {NAV_LINKS.map((link) => (
                        <li key={link.to}>
                            <Link
                                to={link.to}
                                smooth
                                duration={400}
                                offset={NAVBAR_OFFSET}
                                spy
                                onSetActive={() => setActiveSection(link.to)}
                                className={`cursor-pointer border-b-2 pb-1 text-xl font-medium transition-colors duration-200 ${
                                    activeSection === link.to
                                        ? "border-accent text-accent"
                                        : "border-transparent text-text-muted hover:text-text-primary"
                                }`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <button
                    type="button"
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMenuOpen}
                    className="text-text-primary md:hidden"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {isMenuOpen && (
                <div className="flex flex-col gap-1 border-t border-border bg-surface px-6 py-4 md:hidden">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            smooth
                            duration={400}
                            offset={NAVBAR_OFFSET}
                            spy
                            onSetActive={() => setActiveSection(link.to)}
                            onClick={closeMenu}
                            className={`cursor-pointer py-3 text-base font-medium ${
                                activeSection === link.to ? "text-accent" : "text-text-primary"
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
}

export default Navbar;