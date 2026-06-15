export default function DashboardPage() {
  return (
    <div className="px-6 py-8 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-[#0F172A] dark:text-white">
          Dashboard
        </h1>
        <p className="mt-1 text-sm text-[#64748B] dark:text-[#A0A0A0]">
          Welcome back — your study workspace
        </p>
      </div>

      {/* Placeholder stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Documents', value: '0' },
          { label: 'Summaries', value: '0' },
          { label: 'Flashcards', value: '0' },
          { label: 'Quizzes', value: '0' },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-white dark:bg-[#2F2F2F] border border-[#E2E8F0] dark:border-[#3F3F3F] rounded-xl px-5 py-4"
          >
            <p className="text-xs font-mono text-[#94A3B8] dark:text-[#6B7280] uppercase tracking-widest mb-1">
              {stat.label}
            </p>
            <p className="text-2xl font-semibold text-[#0F172A] dark:text-white font-mono">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Empty state */}
      <div className="bg-white dark:bg-[#2F2F2F] border border-[#E2E8F0] dark:border-[#3F3F3F] rounded-xl p-12 flex flex-col items-center text-center gap-4">
        <div className="w-12 h-12 rounded-lg bg-[#EEF4FF] dark:bg-[#0050D8]/15 flex items-center justify-center">
          <span className="w-6 h-6 text-[#0050D8]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
            </svg>
          </span>
        </div>
        <div>
          <p className="text-sm font-medium text-[#0F172A] dark:text-white">
            No documents yet
          </p>
          <p className="text-sm text-[#64748B] dark:text-[#A0A0A0] mt-1">
            Upload a PDF to get started
          </p>
        </div>
        <button className="mt-2 px-5 py-2.5 bg-[#0050D8] text-white text-sm font-medium rounded-md hover:bg-[#003FB5] transition-colors">
          Upload PDF
        </button>
      </div>
    </div>
  )
}
