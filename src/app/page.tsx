import Link from "next/link";
import { FileUp, Brain, ListChecks } from "lucide-react";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-gradient-to-br from-[#E8F5FF] to-white">
      <Navbar />

      {/* Hero — split layout */}
      <section className="max-w-6xl mx-auto w-full px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left: headline + CTA */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#0050D8] font-medium">
                AI Study Workspace
              </span>
              <h1 className="text-4xl md:text-5xl font-semibold text-[#0F172A] leading-tight tracking-tight">
                Turn any PDF into
                <br />a study system
              </h1>
              <p className="text-lg text-[#64748B] leading-relaxed max-w-md">
                Upload a document. Get summaries, checklists, flashcards, and
                quizzes — built by AI, refined for how you learn.
              </p>
            </div>
            <div className="flex flex-row gap-3">
              <Link
                href="/register"
                className="inline-flex items-center px-6 py-3 bg-[#0050D8] text-white text-sm font-medium rounded-md hover:bg-[#003FB5] transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center px-6 py-3 border border-[#E2E8F0] text-[#0F172A] text-sm font-medium rounded-md hover:bg-[#F8FAFC] transition-colors"
              >
                Login
              </Link>
            </div>
          </div>

          {/* Right: app preview mockup */}
          <div className="hidden md:flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-md bg-[#EEF4FF] flex items-center justify-center shrink-0">
                    <FileUp className="w-4 h-4 text-[#0050D8]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="h-3 w-36 bg-[#E2E8F0] rounded mb-2" />
                    <div className="h-2.5 w-24 bg-[#F1F5F9] rounded" />
                  </div>
                </div>
                <div className="space-y-2 mb-5">
                  <div className="h-2.5 w-full bg-[#F1F5F9] rounded" />
                  <div className="h-2.5 w-5/6 bg-[#F1F5F9] rounded" />
                  <div className="h-2.5 w-4/5 bg-[#F1F5F9] rounded" />
                  <div className="h-2.5 w-full bg-[#F1F5F9] rounded" />
                  <div className="h-2.5 w-3/4 bg-[#F1F5F9] rounded" />
                </div>
                <div className="flex gap-2">
                  <div className="h-7 flex-1 bg-[#EEF4FF] rounded border border-[#BFCFFE]" />
                  <div className="h-7 flex-1 bg-[#F1F5F9] rounded" />
                  <div className="h-7 flex-1 bg-[#F1F5F9] rounded" />
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white border border-[#E2E8F0] rounded-lg px-4 py-2.5 shadow-sm flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#22C55E] shrink-0" />
                <span className="text-xs text-[#64748B] font-mono whitespace-nowrap">
                  Summary ready
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features — asymmetric grid */}
      <section className="max-w-6xl mx-auto w-full px-6 py-20">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-[#0F172A] tracking-tight">
            Everything you need to study
          </h2>
          <p className="text-[#64748B] mt-1.5 text-sm">
            Three tools. One workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1: Upload PDF — spans 2 columns, larger with decorative element */}
          <div className="md:col-span-2 bg-white border border-[#E2E8F0] rounded-xl p-8 flex flex-col gap-6">
            <div className="w-10 h-10 rounded-lg bg-[#EEF4FF] flex items-center justify-center">
              <FileUp className="w-5 h-5 text-[#0050D8]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#0F172A] mb-2">
                Upload PDF
              </h3>
              <p className="text-[#64748B] text-sm leading-relaxed max-w-sm">
                Drop any document — lecture notes, textbooks, research papers.
                Your workspace organizes them so you can build on your material
                session by session.
              </p>
            </div>
            <div className="mt-auto border-2 border-dashed border-[#E2E8F0] rounded-lg p-5 flex flex-col items-center gap-2 bg-[#FAFBFF]">
              <div className="w-8 h-8 rounded-md bg-white border border-[#E2E8F0] flex items-center justify-center">
                <FileUp className="w-4 h-4 text-[#94A3B8]" />
              </div>
              <span className="text-xs text-[#94A3B8] font-mono">
                Drag & drop or click to upload
              </span>
            </div>
          </div>

          {/* Cards 2 & 3: stacked in the right column */}
          <div className="flex flex-col gap-4">
            <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 flex flex-col gap-4 flex-1">
              <div className="w-10 h-10 rounded-lg bg-[#EEF4FF] flex items-center justify-center">
                <Brain className="w-5 h-5 text-[#0050D8]" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#0F172A] mb-1.5">
                  AI Summary
                </h3>
                <p className="text-[#64748B] text-sm leading-relaxed">
                  Dense material distilled into clear, structured summaries you
                  can actually use.
                </p>
              </div>
            </div>

            <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 flex flex-col gap-4 flex-1">
              <div className="w-10 h-10 rounded-lg bg-[#EEF4FF] flex items-center justify-center">
                <ListChecks className="w-5 h-5 text-[#0050D8]" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#0F172A] mb-1.5">
                  Study Checklist
                </h3>
                <p className="text-[#64748B] text-sm leading-relaxed">
                  Know exactly what to review. AI breaks material into trackable
                  learning goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <p className="text-xs text-[#94A3B8] font-mono">
            &copy; {new Date().getFullYear()} AI Study Workspace
          </p>
        </div>
      </footer>
    </div>
  );
}
