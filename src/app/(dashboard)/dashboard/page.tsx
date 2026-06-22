import { BookOpen, FileText, Sparkles, Upload, Clock } from 'lucide-react'
import {
  Card,
  CardContent,
  CardHeader,
} from '@/components/ui/card'

const STATS = [
  {
    label: 'Total Subjects',
    value: '0',
    description: 'Active subjects',
    icon: BookOpen,
  },
  {
    label: 'Documents Uploaded',
    value: '0',
    description: 'PDFs in workspace',
    icon: FileText,
  },
  {
    label: 'Summaries Generated',
    value: '0',
    description: 'AI summaries created',
    icon: Sparkles,
  },
] as const

export default function DashboardPage() {
  return (
    <div className="px-6 py-8 max-w-5xl mx-auto">

      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-[#0F172A] dark:text-white">
            Dashboard
          </h1>
          <p className="mt-1 text-sm text-[#64748B] dark:text-[#A0A0A0]">
            Welcome back — your study workspace
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-[#0050D8] text-white text-sm font-medium rounded-md hover:bg-[#003FB5] active:bg-[#002E8A] transition-colors shrink-0">
          <Upload className="w-4 h-4" />
          Upload New Document
        </button>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {STATS.map((stat) => (
          <Card
            key={stat.label}
            className="relative overflow-hidden border-[#E2E8F0] dark:border-[#3F3F3F] ring-0 shadow-none"
          >
            {/* Accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#0050D8]" />

            <CardHeader className="pb-0" />
            <CardContent className="pt-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-[#64748B] dark:text-[#A0A0A0] mb-3">
                    {stat.label}
                  </p>
                  <p className="text-3xl font-semibold tracking-tight text-[#0F172A] dark:text-white font-mono">
                    {stat.value}
                  </p>
                  <p className="text-xs text-[#94A3B8] dark:text-[#6B7280] mt-1">
                    {stat.description}
                  </p>
                </div>
                <div className="w-9 h-9 rounded-lg bg-[#EEF4FF] dark:bg-[#0050D8]/15 flex items-center justify-center shrink-0">
                  <stat.icon className="w-4 h-4 text-[#0050D8] dark:text-[#5B8FFF]" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <Card className="border-[#E2E8F0] dark:border-[#3F3F3F] ring-0 shadow-none overflow-hidden">
        <CardHeader className="flex-row items-center justify-between px-5 py-4 border-b border-[#E2E8F0] dark:border-[#3F3F3F] gap-0">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#94A3B8] dark:text-[#6B7280]" />
            <h2 className="text-sm font-medium text-[#0F172A] dark:text-white">
              Recent Activity
            </h2>
          </div>
          <span className="text-xs text-[#94A3B8] dark:text-[#6B7280]">
            Last 7 days
          </span>
        </CardHeader>

        <CardContent className="p-0">
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="w-9 h-9 rounded-lg bg-[#F1F5F9] dark:bg-[#383838] flex items-center justify-center mb-3">
              <Clock className="w-4 h-4 text-[#94A3B8] dark:text-[#6B7280]" />
            </div>
            <p className="text-sm font-medium text-[#0F172A] dark:text-white">No activity yet</p>
            <p className="text-xs text-[#64748B] dark:text-[#A0A0A0] mt-1">
              Upload a document to get started
            </p>
          </div>
        </CardContent>
      </Card>

    </div>
  )
}
