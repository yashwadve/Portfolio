import { Link } from "react-scroll";
import { Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const SCROLL_OFFSET = -64;


function Hero() {
    return (
        <section id="hero" className="flex items-center">
            <div className="grid w-full grid-cols-1 items-center gap-8 md:grid-cols-[3fr_2fr] lg:gap-16">
                {/* Text block - left-aligned, ~60% width on desktop */}
                <div className="flex flex-col items-start gap-5">
                    <div>
                        <h1 className="font-heading text-4xl font-semibold text-text-primary md:text-5xl">
                            Yash Wadve
                        </h1>
                        <p className="mt-2 font-heading text-xl font-medium text-accent md:text-2xl">
                            Full-Stack Python Developer
                        </p>
                    </div>

                    <p className="max-w-md text-base text-text-muted md:max-w-lg">
                        I build full-stack web applications with Python and Django — from
                        intuitive frontend interfaces to robust REST APIs and
                        well-structured databases.
                    </p>

                    {/* Primary + secondary CTA */}
                    <div className="flex flex-wrap gap-4">
                        <Link
                            to="projects"
                            smooth
                            duration={400}
                            offset={SCROLL_OFFSET}
                            className="cursor-pointer rounded-btn bg-accent px-6 py-3 text-sm font-medium text-background transition-colors duration-200 hover:bg-accent-hover"
                        >
                            View Projects
                        </Link>

                        {/* Resume download lives here since it was removed from the Navbar */}
                        <a
                            href="/resume.pdf"
                            download
                            className="inline-flex cursor-pointer items-center gap-2 rounded-btn border border-border px-6 py-3 text-sm font-medium text-text-primary transition-colors duration-200 hover:border-accent hover:text-accent"
                        >
                            <Download size={16} />
                            Download Resume
                        </a>
                    </div>

                    {/* Social row */}
                    <div className="flex items-center gap-5 pt-2">
                        <a
                            href="https://github.com/yashwadve"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                            className="text-text-muted transition-colors duration-200 hover:text-accent"
                        >
                            <FaGithub size={22} />
                        </a>
                        <a
                            href="https://linkedin.com/in/YOUR-LINKEDIN-HANDLE"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                            className="text-text-muted transition-colors duration-200 hover:text-accent"
                        >
                            <FaLinkedin size={22} />
                        </a>
                        <a
                            href="mailto:your.email@example.com"
                            aria-label="Email"
                            className="text-text-muted transition-colors duration-200 hover:text-accent"
                        >
                            <FaEnvelope size={22} />
                        </a>
                    </div>
                </div>

                {/* Optional visual - static code-snippet card, hidden on mobile per spec */}
                <div className="hidden md:block">
                    <div className="rounded-card border border-border bg-surface p-6 font-mono text-sm text-text-muted">
                        <div className="mb-4 flex gap-2">
                            <span className="h-3 w-3 rounded-full bg-border" />
                            <span className="h-3 w-3 rounded-full bg-border" />
                            <span className="h-3 w-3 rounded-full bg-border" />
                        </div>
                        <pre className="whitespace-pre-wrap leading-relaxed">
                            <code>{`class Developer:
    def __init__(self):
        self.name = "Yash Wadve"
        self.role = "Full-Stack Dev"
        self.stack = [
            "Python", "Django",
            "React", "SQL"
        ]

    def solve(self, problem):
        return "clean, scalable code"`}</code>
                        </pre>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;