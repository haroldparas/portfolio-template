"use client";
import Link from "next/link";

export function BackButton() {
  return (
    <Link 
      href="/" 
      className="group inline-flex items-center gap-2 text-sm font-medium text-[var(--muted)] hover:text-[#111111] dark:hover:text-white transition-colors"
    >
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 stroke-[2.5] transition-transform group-hover:-translate-x-0.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M12 19l-7-7 7-7" />
      </svg>
      Back to home
    </Link>
  );
}
