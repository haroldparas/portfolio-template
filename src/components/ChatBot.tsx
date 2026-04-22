"use client";

import { useChat } from "ai/react";
import { useState, useRef, useEffect } from "react";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 flex h-[450px] w-[350px] flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] shadow-2xl transition-all">
          <div className="flex items-center justify-between border-b border-[var(--border)] bg-[#111111] px-4 py-3 text-white dark:bg-white dark:text-black">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full border border-white/20 bg-white/10 dark:border-black/20 dark:bg-black/10">
                {/* TIP: Replace this src with your actual photo path, for example: src="/profile.jpg" */}
                <img 
                  src="/my-photo.jpg" 
                  alt="Harold Profile" 
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-sm uppercase">Harold</h3>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-[10px] uppercase tracking-wider opacity-70 font-medium">Online</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white dark:text-black/80 dark:hover:text-black transition-colors"
              aria-label="Close Chat"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 stroke-current stroke-[2.5]"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm bg-[var(--background)]/50">
            {messages.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center text-center text-[var(--muted)]">
                <p>Hello! I&apos;m Harold. <br/> How can I help you today?</p>
              </div>
            ) : (
              messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex flex-col ${m.role === "user" ? "items-end" : "items-start"}`}
                >
                  {m.role !== "user" && (
                    <span className="ml-[34px] mb-1 text-[10px] font-medium uppercase tracking-wide opacity-50">Harold</span>
                  )}
                  <div className={`flex gap-2 w-full ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                    {m.role !== "user" && (
                      <div className="h-6 w-6 shrink-0 mt-auto overflow-hidden rounded-full border border-[var(--border)] bg-[#111111] dark:bg-white flex items-center justify-center">
                        <img 
                          src="/my-photo.jpg" 
                          alt="Harold" 
                          className="h-full w-full object-cover"
                        />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                        m.role === "user"
                          ? "bg-[#111111] text-white dark:bg-white dark:text-black rounded-br-sm"
                          : "bg-[var(--card-bg)] border border-[var(--border)] text-[var(--foreground)] rounded-bl-sm"
                      }`}
                    >
                      {m.content}
                    </div>
                  </div>
                </div>
              ))
            )}
            {isLoading && (
              <div className="flex flex-col items-start gap-1">
                <span className="ml-[34px] text-[10px] font-medium uppercase tracking-wide opacity-50">Harold</span>
                <div className="flex justify-start gap-2 w-full">
                  <div className="h-6 w-6 shrink-0 mt-auto overflow-hidden rounded-full border border-[var(--border)] bg-[#111111] dark:bg-white flex items-center justify-center">
                    <img 
                      src="/my-photo.jpg" 
                      alt="Harold" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="bg-[var(--card-bg)] border border-[var(--border)] text-[var(--muted)] rounded-2xl rounded-bl-sm px-4 py-2 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-current rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-current rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 bg-current rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="border-t border-[var(--border)] bg-[var(--card-bg)] p-3 flex gap-2">
            <input
              className="flex-1 rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[#111111] dark:focus:border-white focus:outline-none transition-colors"
              value={input}
              placeholder="Ask me something..."
              onChange={handleInputChange}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="flex items-center justify-center rounded-xl bg-[#111111] px-3 font-medium text-white transition-colors hover:bg-black/80 disabled:opacity-50 dark:bg-white dark:text-black dark:hover:bg-white/80"
              aria-label="Send"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 stroke-current stroke-[2.5]"><path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
            </button>
          </form>
        </div>
      )}

      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex h-12 items-center justify-center gap-2 rounded-full bg-[#111111] px-5 text-sm font-medium text-white shadow-lg transition-transform hover:scale-105 active:scale-95 dark:bg-white dark:text-black"
          aria-label="Open Chat"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 stroke-current stroke-[2]"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
          <span>Chat with Harold</span>
        </button>
      )}
    </div>
  );
}   
