'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  FileText,
  BookOpen,
  Settings,
  Menu,
  X,
  LogOut,
} from 'lucide-react'

const NAV_ITEMS = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard, soon: false },
  { label: 'Subjects', href: '/dashboard/subjects', icon: BookOpen, soon: false },
  { label: 'Documents', href: '/dashboard/documents', icon: FileText, soon: false },
] as const

export default function DashboardShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-[100dvh] overflow-hidden bg-[#F8FAFC] dark:bg-[#191919]">
      {/* Mobile backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={[
          'fixed inset-y-0 left-0 z-50 flex w-64 flex-col',
          'bg-white dark:bg-[#1E1E1E] border-r border-[#E2E8F0] dark:border-[#3F3F3F]',
          'transition-transform duration-200 ease-in-out',
          'md:relative md:translate-x-0',
          sidebarOpen ? 'translate-x-0' : '-translate-x-full',
        ].join(' ')}
      >
        {/* Sidebar header */}
        <div className="flex h-16 items-center justify-between px-5 border-b border-[#E2E8F0] dark:border-[#3F3F3F] shrink-0">
          <Link
            href="/dashboard"
            className="font-mono text-sm font-semibold tracking-tight text-[#0F172A] dark:text-white"
            onClick={() => setSidebarOpen(false)}
          >
            study<span className="text-[#0050D8]">.</span>ai
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden p-1.5 rounded-md text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] dark:text-[#A0A0A0] dark:hover:text-white dark:hover:bg-[#2F2F2F] transition-colors"
            aria-label="Close sidebar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-0.5">
          {NAV_ITEMS.map((item) => (
            <SidebarLink
              key={item.href}
              href={item.href}
              icon={<item.icon className="w-4 h-4 shrink-0" />}
              exact={item.href === '/dashboard'}
              soon={item.soon}
              onClick={() => setSidebarOpen(false)}
            >
              {item.label}
            </SidebarLink>
          ))}
        </nav>

        {/* Bottom section */}
        <div className="shrink-0 border-t border-[#E2E8F0] dark:border-[#3F3F3F] px-3 py-3 space-y-0.5">
          <SidebarLink
            href="/dashboard/settings"
            icon={<Settings className="w-4 h-4 shrink-0" />}
            onClick={() => setSidebarOpen(false)}
          >
            Settings
          </SidebarLink>
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm text-[#64748B] dark:text-[#A0A0A0] hover:text-red-500 hover:bg-red-50 dark:hover:bg-[#3F2020] transition-colors">
            <LogOut className="w-4 h-4 shrink-0 text-[#94A3B8] dark:text-[#6B7280]" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main content area */}
      <div className="flex flex-1 flex-col min-w-0 overflow-hidden">
        {/* Mobile top bar */}
        <header className="md:hidden flex h-14 items-center gap-4 px-4 border-b border-[#E2E8F0] dark:border-[#3F3F3F] bg-white dark:bg-[#1E1E1E] shrink-0">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-1.5 rounded-md text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] dark:text-[#A0A0A0] dark:hover:text-white dark:hover:bg-[#2F2F2F] transition-colors"
            aria-label="Open sidebar"
          >
            <Menu className="w-5 h-5" />
          </button>
          <Link
            href="/dashboard"
            className="font-mono text-sm font-semibold tracking-tight text-[#0F172A] dark:text-white"
          >
            study<span className="text-[#0050D8]">.</span>ai
          </Link>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}

function SidebarLink({
  href,
  icon,
  children,
  exact = false,
  soon = false,
  onClick,
}: {
  href: string
  icon: React.ReactNode
  children: React.ReactNode
  exact?: boolean
  soon?: boolean
  onClick: () => void
}) {
  const pathname = usePathname()
  const isActive = exact ? pathname === href : pathname.startsWith(href)

  const className = [
    'flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors',
    soon
      ? 'text-[#94A3B8] dark:text-[#6B7280] cursor-default pointer-events-none'
      : isActive
        ? 'bg-[#EEF4FF] text-[#0050D8] dark:bg-[#0050D8]/15 dark:text-[#5B8FFF] font-medium'
        : 'text-[#64748B] dark:text-[#A0A0A0] hover:text-[#0F172A] dark:hover:text-white hover:bg-[#F1F5F9] dark:hover:bg-[#2F2F2F]',
  ].join(' ')

  return (
    <Link
      href={href}
      onClick={soon ? (e) => e.preventDefault() : onClick}
      aria-disabled={soon || undefined}
      tabIndex={soon ? -1 : undefined}
      className={className}
    >
      <span className={soon ? 'text-[#CBD5E1] dark:text-[#4B5563]' : isActive ? 'text-[#0050D8] dark:text-[#5B8FFF]' : 'text-[#94A3B8] dark:text-[#6B7280]'}>
        {icon}
      </span>
      <span className="flex-1">{children}</span>
      {soon && (
        <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-[#F1F5F9] dark:bg-[#2F2F2F] text-[#94A3B8] dark:text-[#6B7280] tracking-wide">
          soon
        </span>
      )}
    </Link>
  )
}
