import { skills } from "../../data/portfolio";
import { ThemeToggle } from "../../components/ThemeToggle";
import { BackButton } from "../../components/BackButton";

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] py-12 px-4 transition-colors duration-300 selection:bg-black selection:text-white sm:py-24">
      <div className="mx-auto max-w-[800px]">
        <div className="flex items-center justify-between mb-8">
          <BackButton />
          <div className="inline-flex items-center justify-center">
            <ThemeToggle />
          </div>
        </div>

        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-3">Tech Stack</h1>
          <p className="text-[var(--muted)] text-[15px]">Detailed overview of my technical expertise and the tools I use to build applications.</p>
        </header>

        <div className="space-y-6">
          {[
            { label: "Frontend Development", data: skills.frontend, description: "Building responsive, accessible, and performant user interfaces." },
            { label: "Backend Development", data: skills.backend, description: "Designing scalable server-side architectures." },
            { label: "Database Management", data: skills.database, description: "Handling data storage, migrations, and performance optimization." },
            { label: "API Integration", data: skills.api, description: "Creating and consuming robust, scalable application programming interfaces." },
            { label: "Platforms & Tools", data: skills.platforms, description: "Software and environments used for coding, design, and prototyping." }
          ].map((group) => (
            <section key={group.label} className="rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-5 shadow-[0_10px_30px_rgba(16,27,45,0.03)]">
              <h2 className="text-lg font-bold mb-1.5">{group.label}</h2>
              <p className="text-[13px] text-[var(--muted)] mb-4">{group.description}</p>
              <div className="flex flex-wrap gap-2.5">
                {group.data.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-1 text-[13px] font-medium transition-colors hover:border-black dark:hover:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}

