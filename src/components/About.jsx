function About() {
  return (
    <section id="about" className="flex items-center bg-background py-8 md:py-0">
      <div className="grid w-full grid-cols-1 items-center gap-8 md:grid-cols-[260px_1fr] lg:gap-16">
        <div className="flex justify-center md:justify-start">
          <div className="h-64 w-64 overflow-hidden rounded-card border border-border bg-surface">
            <img src="/images/Profile.jpeg" alt="Yash Wadve" className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="font-heading text-4xl font-semibold text-text-primary">
            About
          </h2>
          <p className="text-lg leading-relaxed text-text-muted">
            I'm a recent Master of Computer Applications (MCA) graduate from
            Pimpri Chinchwad College of Engineering, Pune. I build full-stack
            web applications with Python and Django, from crafting intuitive
            frontend interfaces to designing robust REST APIs and managing
            relational databases. I enjoy turning real-world problems into
            clean, scalable software — and I'm currently looking for
            opportunities to build production-grade products as a full-stack
            developer.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;