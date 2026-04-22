import { certifications } from "../../data/portfolio";
import { ThemeToggle } from "../../components/ThemeToggle";
import { BackButton } from "../../components/BackButton";

export default function CertificationsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] py-12 px-4 selection:bg-black/5 selection:text-black dark:selection:bg-white/10 dark:selection:text-white sm:py-24 transition-colors duration-400">
      <div className="mx-auto max-w-[800px]">
        <div className="flex items-center justify-between mb-12">
          <BackButton />
          <div className="inline-flex items-center justify-center">
            <ThemeToggle />
          </div>
        </div>

        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-3 uppercase">Certifications</h1>
          <p className="text-[var(--muted)] text-[15px]">A showcase of ongoing learning, verified skills, and industry achievements.</p>
        </header>

        <div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((cert, index) => {
            const hasLink = cert.link && (cert.link as string) !== "#";
            const Container = hasLink ? "a" : "article";
            const props = hasLink ? { href: cert.link, target: "_blank", rel: "noopener noreferrer" } : {};
            
            return (
            <Container key={`cert-${index}`} {...props} className="group relative flex flex-col justify-between rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-5 shadow-[0_10px_30px_rgba(16,27,45,0.03)] transition-all hover:shadow-md hover:border-[#111111]/10 dark:hover:border-white/10 cursor-pointer">
              <div className="mb-3">
                <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[rgba(0,0,0,0.03)] dark:bg-[rgba(255,255,255,0.03)] group-hover:bg-[#111111] dark:group-hover:bg-white transition-colors">
                  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 stroke-[2] text-[var(--muted)] group-hover:text-white dark:group-hover:text-black transition-colors" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h2 className="text-[17px] font-bold leading-tight text-[var(--foreground)] transition-colors mb-1">{cert.name}</h2>
                <p className="text-[13px] text-[var(--muted)] leading-relaxed mt-2 line-clamp-3">
                  {cert.description}
                </p>
              </div>
              <div className="flex items-center justify-between mt-1">
                <p className="text-[13px] font-medium text-[var(--muted)]">
                  {cert.issuer}
                </p>
                {hasLink ? (
                  <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5 stroke-[2.5] text-[var(--muted)] group-hover:text-emerald-500 transition-colors" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                ) : (
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
                )}
              </div>
            </Container>
          )})}
        </div>
      </div>
    </main>
  );
}
