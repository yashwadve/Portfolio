// src/components/Education.jsx
import { GraduationCap } from "lucide-react";

const EDUCATION = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Pimpri Chinchwad College of Engineering, Pune",
    cgpa: "7.35/10",
    years: "2024 – 2026",
  },
  
  {
    degree: "Bachelor of Commerce in Computer Applications (BCCA)",
    institution:
      "Dr. Ambedkar Institute of Management Studies and Research, Nagpur",
    cgpa: "7.4/10",
    years: "2021 – 2023",
  },
];

function Education() {
  return (
    <section
      id="education"
      className="bg-background px-8 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto flex w-full max-w-[1800px] flex-col gap-12">
        {/* Section heading - matches Skills/Projects pattern */}
        <div>
          <h2 className="font-heading text-4xl font-semibold text-text-primary">
            Education
          </h2>
          <p className="mt-3 max-w-2xl text-base text-text-muted">
            My academic background in computer applications and software
            development.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative flex flex-col gap-8 border-l-2 border-border pl-10 md:pl-12">
          {EDUCATION.map((edu) => (
            <div
              key={edu.degree}
              className="group relative rounded-card border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent"
            >
              {/* Timeline marker */}
              <span className="absolute top-8 -left-[3.15rem] flex h-9 w-9 items-center justify-center rounded-full border-2 border-accent bg-background md:-left-[3.65rem]">
                <GraduationCap size={16} className="text-accent" />
              </span>

              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between md:gap-6">
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-heading text-xl font-semibold text-text-primary">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-text-muted">{edu.institution}</p>
                </div>

                {/* Years badge - stands out on the right on desktop */}
                <span className="w-fit shrink-0 rounded-btn border border-border bg-background px-4 py-1.5 text-sm font-medium text-text-muted">
                  {edu.years}
                </span>
              </div>

              {/* CGPA pill */}
              <div className="mt-5 flex items-center gap-3">
                <span className="rounded-btn bg-accent px-4 py-1.5 text-sm font-semibold text-background">
                  CGPA: {edu.cgpa}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;