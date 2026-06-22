import { BookOpen } from 'lucide-react'

export default function SubjectsPage() {
  return (
    <div className="px-6 py-8 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-[#0F172A] dark:text-white">
          Subjects
        </h1>
        <p className="mt-1 text-sm text-[#64748B] dark:text-[#A0A0A0]">
          Organize your documents by subject
        </p>
      </div>

      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-12 h-12 rounded-xl bg-[#EEF4FF] dark:bg-[#0050D8]/15 flex items-center justify-center mb-4">
          <BookOpen className="w-5 h-5 text-[#0050D8] dark:text-[#5B8FFF]" />
        </div>
        <p className="text-sm font-medium text-[#0F172A] dark:text-white">
          No subjects yet. Create your first subject.
        </p>
        <button className="mt-5 px-4 py-2.5 bg-[#0050D8] text-white text-sm font-medium rounded-md hover:bg-[#003FB5] active:bg-[#002E8A] transition-colors">
          Create Subject
        </button>
      </div>
    </div>
  )
}
