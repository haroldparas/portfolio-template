"use client";
/* eslint-disable react-hooks/set-state-in-effect */

import Link from "next/link";
import { skills, projects, experience, certifications } from "../data/portfolio";
import { ThemeToggle } from "../components/ThemeToggle";

export default function Home() {

  return (
    <main id="top" className="min-h-screen bg-background text-foreground selection:bg-black/5 selection:text-black dark:selection:bg-white/10 dark:selection:text-white transition-colors duration-400 [text-wrap:pretty]">
      <div className="mx-auto flex w-full max-w-[1000px] justify-center px-4 py-8 sm:px-6 lg:px-8">
        <div className="w-full max-w-[800px] animate-in fade-in slide-in-from-bottom-4 duration-700">
          <section className="w-full space-y-6">
            <header className="group flex flex-col gap-6 border border-[var(--border)] bg-[var(--card-bg)] p-6 shadow-[0_10px_25px_rgba(16,27,45,0.03)] transition-all hover:shadow-[0_15px_35px_rgba(16,27,45,0.06)] hover:border-[rgba(0,0,0,0.12)] dark:hover:border-[rgba(255,255,255,0.15)] sm:flex-row sm:items-start sm:justify-between rounded-2xl">

              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-6">
                <div className="relative h-24 w-24 shrink-0 rounded-2xl border border-[var(--border)] p-1 transition-transform group-hover:scale-[1.02] sm:h-32 sm:w-32">
                  <div className="relative h-full w-full rounded-xl overflow-hidden bg-muted">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/profile-light.jpg"
                      alt="Harold Paras Light"
                      className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 opacity-100 dark:opacity-0"
                    />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/profile-dark.jpg"
                      alt="Harold Paras Dark"
                      className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 opacity-0 dark:opacity-100"
                    />
                  </div>
                </div>

                <div className="space-y-4 pt-1">
                  <div className="space-y-1">
                    <h1 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
                      Harold Paras
                    </h1>
                    <div className="flex items-center gap-2 text-[13px] font-medium text-[var(--muted)]">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                      Tarlac City, Philippines
                    </div>
                  </div>
                  
                  <p className="text-[17px] font-medium leading-relaxed text-[var(--foreground)]/90 sm:text-lg">
                    Junior System Analyst | <span className="text-[#111111] dark:text-white">Full-Stack Developer</span>
                  </p>

                  <div className="flex items-center gap-2 pt-1">
                    <a 
                      href="https://www.facebook.com/h.aroldparas29/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[rgba(24,119,242,0.05)] text-[var(--muted)] hover:-translate-y-1 hover:text-[#111111] dark:hover:text-white hover:border-[#111111] dark:hover:border-white hover:shadow-sm transition-all duration-300"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </a>
                    <a 
                      href="https://github.com/haroldparas" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[rgba(0,0,0,0.05)] dark:bg-[rgba(255,255,255,0.05)] text-[var(--muted)] hover:-translate-y-1 hover:text-[#111111] dark:hover:text-white hover:border-[#111111] dark:hover:border-white hover:shadow-sm transition-all duration-300"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                    <a 
                      href="https://www.instagram.com/rold.ig/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[rgba(228,64,95,0.05)] text-[var(--muted)] hover:-translate-y-1 hover:text-[#111111] dark:hover:text-white hover:border-[#111111] dark:hover:border-white hover:shadow-sm transition-all duration-300"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.011 3.586-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.947.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    </a>
                    <a 
                      href="https://ph.linkedin.com/in/harold-florence-paras" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[rgba(0,119,181,0.05)] text-[var(--muted)] hover:-translate-y-1 hover:text-[#111111] dark:hover:text-white hover:border-[#111111] dark:hover:border-white hover:shadow-sm transition-all duration-300"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                    <a 
                      href="mailto:contact@haroldparas29@gmail.com" 
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[rgba(234,67,53,0.05)] text-[var(--muted)] hover:-translate-y-1 hover:text-[#111111] dark:hover:text-white hover:border-[#111111] dark:hover:border-white hover:shadow-sm transition-all duration-300"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end gap-3 self-end sm:self-auto">
                <ThemeToggle />
              </div>
            </header>

            <div className="space-y-6">
              <article className="rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] px-5 pb-6 pt-5 text-left shadow-[0_10px_30px_rgba(16,27,45,0.04)] sm:px-6 transition-all hover:border-black/10 dark:hover:border-white/10">
                <h2 className="mb-4 text-xl font-bold tracking-tight">About</h2>
                <div className="space-y-4 text-[15px] leading-relaxed text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
                  <p>
                    My journey into technology began at home. Growing up with a father who was a <span className="text-[var(--foreground)] font-medium"> Software Developer, </span>
                    I spent my childhood inspired by the world he built through code. Today, I am proud to carry that 
                    legacy forward as a <span className="text-[var(--foreground)] font-medium">Full-Stack Developer</span>.
                  </p> 
                  <p>
                    After graduating with a BS in Computer Science from Tarlac State University, I stepped into the role 
                    of <span className="text-[var(--foreground)] font-medium">Junior Systems Analyst</span> at Royce Hotel & Casino. Whether I’m working with PHP or 
                    modern MERN Stack environments, I bring a lifelong passion for innovation and a dedicated focus 
                    on developing solutions that make a tangible impact.
                  </p>
                </div>
              </article>

              <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
                <article className="rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-5 text-left shadow-[0_12px_34px_rgba(16,27,45,0.05)] flex flex-col">
                  <div className="mb-5 flex items-center justify-between gap-3 font-semibold tracking-tight">
                    <h3 className="text-xl">Tech Stack</h3>
                    <div className="text-[11px] font-medium uppercase tracking-[0.1em] text-[var(--muted)]">
                      Skills
                    </div>
                  </div>
                  <div className="space-y-6 flex-grow">
                    {[
                      { label: "Frontend", data: skills.frontend },
                      { label: "Backend", data: skills.backend }
                    ].map((group) => (group.data && group.data.length > 0) && (
                      <div key={group.label} className="group/skill">
                        <h4 className="flex items-center gap-2 mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--muted)] transition-colors group-hover/skill:text-[#111111] dark:group-hover/skill:text-white">
                          <span className="h-1 w-1 rounded-full bg-[var(--border)] group-hover/skill:bg-[#111111] dark:group-hover/skill:bg-white" />
                          {group.label}
                        </h4>
                        <div className="flex flex-wrap gap-x-6 gap-y-3 text-[14px] text-[var(--muted)]">
                          {group.data.map((item) => (
                            <span 
                              key={item} 
                              className="font-medium transition-all hover:text-[#111111] dark:hover:text-white hover:translate-x-0.5 cursor-pointer"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t border-[var(--border)]">
                    <Link href="/skills" className="group flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-wider text-[var(--muted)] hover:text-[#111111] dark:hover:text-white transition-colors">
                      View all skills
                      <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3 stroke-[3] transition-transform group-hover:translate-x-0.5" stroke="currentColor"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </Link>
                  </div>
                </article>

                <article id="experience" className="rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-5 text-left shadow-[0_12px_34px_rgba(16,27,45,0.05)] flex flex-col">
                  <div className="mb-5 flex items-center justify-between gap-3 font-semibold tracking-tight">
                    <h3 className="text-xl">Experience</h3>
                    <div className="text-[11px] font-medium uppercase tracking-[0.1em] text-[var(--muted)]">
                      Timeline
                    </div>
                  </div>
                  
                  <div className="space-y-6 flex-grow">
                    {experience.slice(0, 3).map((item, index) => (
                      <div key={`${item.role}-${item.year}`} className="group/exp">
                        <h4 className="flex items-center justify-between mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--muted)] transition-colors group-hover/exp:text-[#111111] dark:group-hover/exp:text-white">
                          <div className="flex items-center gap-2">
                            <span className={`h-1 w-1 rounded-full ${index === 0 ? 'bg-[#111111] dark:bg-white scale-125' : 'bg-[var(--border)]'} group-hover/exp:bg-[#111111] dark:group-hover/exp:bg-white`} />
                            {item.role}
                          </div>
                          <span className="font-mono tracking-wider opacity-60">{item.year}</span>
                        </h4>
                        <div className="flex flex-col pl-3">
                          <span className="text-[14px] text-foreground font-medium transition-all group-hover/exp:text-[#111111] dark:group-hover/exp:text-white group-hover/exp:translate-x-0.5 cursor-pointer">
                            {item.organization}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-4 border-t border-[var(--border)]">
                    <Link href="/experience" className="group flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-wider text-[var(--muted)] hover:text-[#111111] dark:hover:text-white transition-colors">
                      View full experience
                      <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3 stroke-[3] transition-transform group-hover:translate-x-0.5" stroke="currentColor"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </Link>
                  </div>
                </article>
              </div>

              <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
                <article className="rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-5 text-left shadow-[0_12px_34px_rgba(16,27,45,0.05)]">
                  <div className="mb-6 flex items-center justify-between gap-3">
                    <h3 className="text-xl font-semibold tracking-tight uppercase">Recent Projects</h3>
                    <Link 
                      href="/projects" 
                      className="group flex items-center gap-1 text-[12px] font-bold uppercase tracking-wider text-[var(--muted)] hover:text-[#111111] dark:hover:text-white transition-colors"
                    >
                      View All
                      <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3 stroke-[3] transition-transform group-hover:translate-x-0.5" stroke="currentColor"><path d="M9 5l7 7-7 7" /></svg>
                    </Link>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {projects.map((project, index) => (
                      <div 
                        key={`${project.title || 'project'}-${index}`} 
                        className="group relative rounded-xl border border-border bg-black/[0.02] dark:bg-white/[0.02] p-5 transition-all hover:bg-card-bg hover:shadow-md"
                      >
                        <div className="mb-3">
                          <h4 className="text-[15px] font-bold text-foreground transition-colors group-hover:text-[#111111] dark:group-hover:text-white">{project.title || 'Untitled Project'}</h4>
                          <p className="mt-1 text-[13px] text-muted line-clamp-2 transition-colors group-hover:text-[#111111] dark:group-hover:text-[#cccccc]">
                            {project.description || 'No description available.'}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>

                <article className="rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-5 text-left shadow-[0_12px_34px_rgba(16,27,45,0.05)]">
                  <div className="mb-6 flex items-center justify-between gap-3">
                    <h3 className="text-xl font-semibold tracking-tight uppercase">Recent Certs</h3>
                    <Link 
                      href="/certifications" 
                      className="group flex items-center gap-1 text-[12px] font-bold uppercase tracking-wider text-[var(--muted)] hover:text-[#111111] dark:hover:text-white transition-colors"
                    >
                      View All
                      <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3 stroke-[3] transition-transform group-hover:translate-x-0.5" stroke="currentColor"><path d="M9 5l7 7-7 7" /></svg>
                    </Link>
                  </div>
                  <div className="space-y-4">
                    {certifications.slice(0, 4).map((cert) => (
                      <div key={cert.name} className="group flex items-start gap-3">
                        <div className="mt-1 h-3 w-3 shrink-0 rounded-full border-2 border-border group-hover:border-[#111111] dark:group-hover:border-white group-hover:bg-[#111111] dark:group-hover:bg-white transition-colors" />
                        <div>
                          <h4 className="text-[14px] font-bold leading-5 text-foreground transition-colors group-hover:text-[#111111] dark:group-hover:text-white">{cert.name}</h4>
                          <p className="text-[12px] font-medium text-muted transition-colors group-hover:text-[#111111] dark:group-hover:text-[#cccccc]">{cert.issuer}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              </div>
            </div>

            <footer className="rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] py-6 text-center text-[12px] text-[var(--foreground)]/85 shadow-[0_10px_28px_rgba(16,27,45,0.04)]">
              © {new Date().getFullYear()} Harold Paras. All rights reserved.
            </footer>
          </section>
        </div>
      </div>
    </main>
  );
}


