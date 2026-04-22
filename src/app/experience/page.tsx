import { experience } from "../../data/portfolio";
import { ThemeToggle } from "../../components/ThemeToggle";
import { BackButton } from "../../components/BackButton";

export default function ExperiencePage() {
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
          <h1 className="text-3xl font-bold tracking-tight mb-3">Professional Experience</h1>
          <p className="text-[var(--muted)] text-[15px]">A chronicle of my career, focused projects, and contributions to the software engineering community.</p>
        </header>

        <div className="space-y-6 border-l border-[var(--border)] ml-2.5 pl-6">
          {experience.map((item, index) => (
            <section key={`${item.role}-${item.year}`} className="relative group p-5 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] shadow-[0_10px_30px_rgba(16,27,45,0.03)] transition-all hover:shadow-md hover:border-[#111111]/10 dark:hover:border-white/10">
              <span
                className={`absolute -left-[1.85rem] top-7 h-2.5 w-2.5 rounded-full border-2 transition-all duration-300 z-10 ${
                  index === 0
                    ? "border-black dark:border-white bg-black dark:bg-white ring-[3px] ring-black/5 dark:ring-white/10"
                    : "border-[var(--border)] bg-[var(--card-bg)] group-hover:border-black dark:group-hover:border-white"
                }`}
              />
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                <div>
                  <h2 className="text-lg font-bold text-[var(--foreground)]">{item.role}</h2>
                  <p className="text-[13px] text-[var(--muted)] font-medium mb-1.5">{item.organization}</p>
                </div>
                <time className="mt-1 sm:mt-0 inline-block rounded-md bg-[rgba(128,128,128,0.05)] px-2 py-1 text-[11px] font-bold tabular-nums text-[var(--muted)] border border-[var(--border)]">
                  {item.year}
                </time>
              </div>
              <p className="text-[14px] leading-relaxed text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors">
                {item.description}
              </p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}

