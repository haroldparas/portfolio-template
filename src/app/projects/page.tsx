"use client";

import { useState } from "react";
import { projects } from "../../data/portfolio";
import { ThemeToggle } from "../../components/ThemeToggle";
import { BackButton } from "../../components/BackButton";
import Image from "next/image";

export default function ProjectsPage() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index: number) => {
    setSelectedProjectIndex(index);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProjectIndex(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProjectIndex === null) return;
    const project = projects[selectedProjectIndex];
    if (project.images && project.images.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProjectIndex === null) return;
    const project = projects[selectedProjectIndex];
    if (project.images && project.images.length > 0) {
      setCurrentImageIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
    }
  };

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
          <h1 className="text-3xl font-bold tracking-tight mb-3 uppercase">Projects</h1>
          <p className="text-[var(--muted)] text-[15px]">A gallery of digital products, experiments, and technical explorations.</p>
        </header>

        <div className="grid gap-4">
          {projects.map((project, index) => (
            <article key={`${project.title || "project"}-${index}`} className="group rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-5 shadow-[0_10px_30px_rgba(16,27,45,0.03)] transition-all hover:shadow-md hover:border-[#111111]/10 dark:hover:border-white/10">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                <div>
                  <h2 className="text-lg font-bold uppercase transition-colors group-hover:text-[#111111] dark:group-hover:text-white">{project.title}</h2>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[11px] font-bold uppercase tracking-wider text-[var(--muted)] transition-colors group-hover:text-[#111111] dark:group-hover:text-[#cccccc]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-[14px] leading-relaxed text-[var(--muted)] mb-5 transition-colors group-hover:text-[var(--foreground)]">
                {project.description}
              </p>
              <button
                onClick={() => openModal(index)}
                className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[var(--foreground)] border-b-2 border-[var(--foreground)]/10 hover:border-[var(--foreground)] transition-colors pb-0.5"
              >
                View
                <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3 stroke-[2.5]" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </button>
            </article>
          ))}
        </div>
      </div>

      {selectedProjectIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={closeModal}
        >
          <div 
            className="relative bg-[var(--card-bg)] border border-[var(--border)] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-[var(--border)]">
              <h3 className="text-lg font-bold uppercase">{projects[selectedProjectIndex].title}</h3>
              <button 
                onClick={closeModal}
                className="p-2 rounded-full hover:bg-[var(--foreground)]/10 transition-colors"
                aria-label="Close"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 stroke-[2]" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="relative flex-1 bg-black/5 min-h-[50vh] flex justify-center items-center">
              {projects[selectedProjectIndex].images && projects[selectedProjectIndex].images!.length > 0 ? (
                <>
                  <div className="relative w-full h-full min-h-[400px]">
                    <Image 
                      src={projects[selectedProjectIndex].images![currentImageIndex]} 
                      alt={`${projects[selectedProjectIndex].title} screenshot ${currentImageIndex + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                      className="object-contain"
                    />
                  </div>
                  
                  {projects[selectedProjectIndex].images!.length > 1 && (
                    <>
                      <button 
                        onClick={prevImage}
                        className="absolute left-4 p-3 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
                        aria-label="Previous image"
                      >
                        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 stroke-[2.5]" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button 
                        onClick={nextImage}
                        className="absolute right-4 p-3 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
                        aria-label="Next image"
                      >
                        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 stroke-[2.5]" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                      
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {projects[selectedProjectIndex].images!.map((_, idx) => (
                          <div 
                            key={idx} 
                            className={`h-2 w-2 rounded-full transition-colors ${idx === currentImageIndex ? "bg-white" : "bg-white/40"}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </>
              ) : (
                <div className="text-[var(--muted)] p-12 text-center">
                  <p>Image placeholder. You can drop images here later.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

