import skills from "../data/skills";

function Skills() {
  return (
    <section id="skills" className="bg-background px-8 py-24 md:px-12 lg:px-20">
      <div className="mx-auto w-full max-w-[1800px]">

        <div className="mb-12">
          <h2 className="font-heading text-4xl font-semibold text-text-primary lg:text-3xl">
            Skills
          </h2>
          <p className="mt-3 max-w-2xl text-base text-text-muted lg:text-lg">
            Technologies and tools I use to build full-stack web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-card border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent lg:p-9"
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                <h3 className="font-heading text-xl font-semibold text-text-primary lg:text-2xl">
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="cursor-default rounded-btn border border-border bg-background px-4 py-2.5 text-sm font-medium text-text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-background lg:text-base"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;