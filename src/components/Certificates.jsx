// src/components/Certificates.jsx
import { Award, ExternalLink } from "lucide-react";
import certificates from "../data/certificates";

function Certificates() {
  return (
    <section
      id="certificates"
      className="bg-background px-8 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto flex w-full max-w-[1800px] flex-col gap-12">
        {/* Section heading - matches Skills/Education pattern */}
        <div>
          <h2 className="font-heading text-4xl font-semibold text-text-primary">
            Certificates
          </h2>
          <p className="mt-3 max-w-2xl text-base text-text-muted">
            Courses and certifications I've completed to sharpen my skills.
          </p>
        </div>

        {/* 2x2 grid on desktop for 4 items, 1 column on mobile */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="group flex flex-col gap-4 rounded-card border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent"
            >
              {/* Icon badge + issuer */}
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-accent bg-background">
                  <Award size={18} className="text-accent" />
                </span>

                <span className="rounded-btn border border-border bg-background px-3 py-1 text-xs font-medium uppercase tracking-wide text-text-muted">
                  {cert.issuer}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-heading text-lg font-semibold text-text-primary">
                {cert.name}
              </h3>

              {/* Footer row - date + verify link */}
              <div className="mt-auto flex items-center justify-between border-t border-border pt-4 text-sm">
                <span className="text-text-muted">
                  {cert.date || "Date pending"}
                </span>

                {cert.verifyLink ? (
                  <a
                    href={cert.verifyLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-accent transition-colors duration-200 hover:text-accent-hover"
                  >
                    Verify
                    <ExternalLink size={14} />
                  </a>
                ) : (
                  <span className="text-text-muted">Verify link pending</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;