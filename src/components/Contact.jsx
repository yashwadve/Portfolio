// src/components/Contact.jsx
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      .then(() => {
        setStatus("success");
        formRef.current.reset();
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        setStatus("error");
      });
  };

  return (
    <section
      id="contact"
      className="bg-background px-8 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto flex w-full max-w-[1800px] flex-col gap-12">
        <div className="flex flex-col gap-4">
          <span className="inline-flex w-fit items-center gap-2 rounded-btn border border-accent bg-surface px-4 py-1.5 text-sm font-medium text-accent">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Open to entry-level Full-Stack / Python roles
          </span>

          <div>
            <h2 className="font-heading text-4xl font-semibold text-text-primary">
              Contact
            </h2>
            <p className="mt-3 max-w-2xl text-base text-text-muted">
              I'm actively looking for my first full-time opportunity as a
              full-stack developer. If my skill set fits a role you're hiring
              for, I'd love to hear from you.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[3fr_2fr]">
          {/* Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 rounded-card border border-border bg-surface p-8"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-text-primary">
                  Name
                </label>
                <input
                  id="name"
                  name="from_name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="rounded-btn border border-border bg-background px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-text-primary">
                  Email
                </label>
                <input
                  id="email"
                  name="from_email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="rounded-btn border border-border bg-background px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="company" className="text-sm font-medium text-text-primary">
                Company / Role <span className="text-text-muted">(optional)</span>
              </label>
              <input
                id="company"
                name="company"
                type="text"
                placeholder="e.g. Acme Corp"
                className="rounded-btn border border-border bg-background px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-text-primary">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me a bit about the role or opportunity..."
                className="resize-none rounded-btn border border-border bg-background px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-btn bg-accent px-6 py-3 text-sm font-medium text-background transition-colors duration-200 hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send size={16} />
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {/* Status feedback */}
            {status === "success" && (
              <p className="flex items-center gap-2 text-sm font-medium text-green-500">
                <CheckCircle size={16} />
                Message sent! I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="flex items-center gap-2 text-sm font-medium text-red-500">
                <AlertCircle size={16} />
                Something went wrong. Please email me directly instead.
              </p>
            )}
          </form>

          {/* Direct contact info */}
          <div className="flex flex-col gap-4">
            <div className="rounded-card border border-border bg-surface p-7">
              <h3 className="font-heading text-lg font-semibold text-text-primary">
                Prefer a quick email?
              </h3>
              <p className="mt-2 text-sm text-text-muted">
                Reach me directly through any of these — I usually reply
                within a day.
              </p>

              <div className="mt-6 flex flex-col gap-4">
                <a
                  href="mailto:yashwadve12@gmail.com"
                  className="flex items-center gap-3 rounded-btn border border-border bg-background px-4 py-3 text-sm font-medium text-text-primary transition-colors duration-200 hover:border-accent hover:text-accent"
                >
                  <Mail size={18} />
                  yashwadve12@gmail.com
                </a>

                <a
                  href="https://github.com/yashwadve"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-btn border border-border bg-background px-4 py-3 text-sm font-medium text-text-primary transition-colors duration-200 hover:border-accent hover:text-accent"
                >
                  <FaGithub size={18} />
                  github.com/yashwadve
                </a>

                <a
                  href="https://linkedin.com/in/YOUR-LINKEDIN-HANDLE"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-btn border border-border bg-background px-4 py-3 text-sm font-medium text-text-primary transition-colors duration-200 hover:border-accent hover:text-accent"
                >
                  <FaLinkedin size={18} />
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-card border border-border bg-surface p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-background">
                <MapPin size={16} className="text-accent" />
              </span>
              <div>
                <p className="text-sm font-medium text-text-primary">
                  Pune, Maharashtra, India
                </p>
                <p className="text-xs text-text-muted">
                  Open to remote & relocation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;