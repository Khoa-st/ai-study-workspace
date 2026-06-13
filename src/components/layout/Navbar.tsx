'use client'

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { Menu, X, LayoutDashboard, Settings, LogOut } from 'lucide-react'

interface NavUser {
  name: string
  email: string
  avatarUrl?: string
}

interface NavbarProps {
  user?: NavUser
}

export default function Navbar({ user }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  const initials = user?.name
    .split(' ')
    .filter(Boolean)
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  return (
    <header className="sticky top-0 z-50 border-b border-[#E2E8F0] bg-white/70 backdrop-blur-sm dark:bg-[#191919]/80 dark:border-[#3F3F3F]">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="font-mono text-sm font-semibold tracking-tight text-[#0F172A] dark:text-white"
        >
          study<span className="text-[#0050D8]">.</span>ai
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-2">
          {user ? (
            <>
              <Link
                href="/dashboard"
                className="flex items-center gap-1.5 px-3 py-2 rounded-md text-sm text-[#64748B] dark:text-[#A0A0A0] hover:text-[#0F172A] dark:hover:text-white hover:bg-[#F1F5F9] dark:hover:bg-[#2F2F2F] transition-colors"
              >
                <LayoutDashboard className="w-4 h-4" />
                Dashboard
              </Link>

              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen((v) => !v)}
                  className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-md hover:bg-[#F1F5F9] dark:hover:bg-[#2F2F2F] transition-colors"
                >
                  <Avatar user={user} initials={initials} size={7} />
                  <span className="text-sm font-medium text-[#0F172A] dark:text-white max-w-[120px] truncate">
                    {user.name}
                  </span>
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 top-full mt-1.5 w-56 bg-white dark:bg-[#2F2F2F] border border-[#E2E8F0] dark:border-[#3F3F3F] rounded-xl shadow-lg overflow-hidden z-50">
                    <div className="px-3 py-2.5 border-b border-[#E2E8F0] dark:border-[#3F3F3F]">
                      <p className="text-sm font-medium text-[#0F172A] dark:text-white truncate">{user.name}</p>
                      <p className="text-xs text-[#64748B] dark:text-[#A0A0A0] truncate">{user.email}</p>
                    </div>
                    <div className="py-1">
                      <DropdownLink href="/dashboard" icon={<LayoutDashboard className="w-4 h-4" />} onClick={() => setDropdownOpen(false)}>
                        Dashboard
                      </DropdownLink>
                      <DropdownLink href="/settings" icon={<Settings className="w-4 h-4" />} onClick={() => setDropdownOpen(false)}>
                        Settings
                      </DropdownLink>
                    </div>
                    <div className="border-t border-[#E2E8F0] dark:border-[#3F3F3F] py-1">
                      <DropdownLink href="/login" icon={<LogOut className="w-4 h-4" />} onClick={() => setDropdownOpen(false)} danger>
                        Sign Out
                      </DropdownLink>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="px-3 py-2 rounded-md text-sm text-[#64748B] dark:text-[#A0A0A0] hover:text-[#0F172A] dark:hover:text-white hover:bg-[#F1F5F9] dark:hover:bg-[#2F2F2F] transition-colors"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="px-4 py-2 rounded-md text-sm font-medium bg-[#0050D8] text-white hover:bg-[#003FB5] transition-colors"
              >
                Get Started
              </Link>
            </>
          )}
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-md text-[#64748B] dark:text-[#A0A0A0] hover:text-[#0F172A] dark:hover:text-white hover:bg-[#F1F5F9] dark:hover:bg-[#2F2F2F] transition-colors"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#E2E8F0] dark:border-[#3F3F3F] bg-white dark:bg-[#191919] px-6 py-3 flex flex-col gap-1">
          {user ? (
            <>
              <div className="flex items-center gap-3 px-3 py-2.5 mb-1 border-b border-[#E2E8F0] dark:border-[#3F3F3F]">
                <Avatar user={user} initials={initials} size={8} />
                <div className="min-w-0">
                  <p className="text-sm font-medium text-[#0F172A] dark:text-white truncate">{user.name}</p>
                  <p className="text-xs text-[#64748B] dark:text-[#A0A0A0] truncate">{user.email}</p>
                </div>
              </div>
              <MobileLink href="/dashboard" onClick={() => setMobileOpen(false)}>
                <LayoutDashboard className="w-4 h-4" /> Dashboard
              </MobileLink>
              <MobileLink href="/settings" onClick={() => setMobileOpen(false)}>
                <Settings className="w-4 h-4" /> Settings
              </MobileLink>
              <MobileLink href="/login" onClick={() => setMobileOpen(false)} danger>
                <LogOut className="w-4 h-4" /> Sign Out
              </MobileLink>
            </>
          ) : (
            <>
              <MobileLink href="/login" onClick={() => setMobileOpen(false)}>
                Login
              </MobileLink>
              <Link
                href="/register"
                onClick={() => setMobileOpen(false)}
                className="mt-1 px-3 py-2.5 rounded-md text-sm font-medium text-center bg-[#0050D8] text-white hover:bg-[#003FB5] transition-colors"
              >
                Get Started
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  )
}

function Avatar({
  user,
  initials,
  size,
}: {
  user: NavUser
  initials: string | undefined
  size: number
}) {
  const dim = `w-${size} h-${size}`
  return (
    <div className={`${dim} rounded-full bg-[#0050D8] flex items-center justify-center shrink-0 overflow-hidden`}>
      {user.avatarUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={user.avatarUrl} alt={user.name} className="w-full h-full object-cover" />
      ) : (
        <span className="text-white text-xs font-medium">{initials}</span>
      )}
    </div>
  )
}

function DropdownLink({
  href,
  icon,
  children,
  onClick,
  danger,
}: {
  href: string
  icon: React.ReactNode
  children: React.ReactNode
  onClick: () => void
  danger?: boolean
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`flex items-center gap-2 px-3 py-2 text-sm transition-colors ${
        danger
          ? 'text-red-500 hover:bg-red-50 dark:hover:bg-[#3F2020]'
          : 'text-[#0F172A] dark:text-white hover:bg-[#F1F5F9] dark:hover:bg-[#3F3F3F]'
      }`}
    >
      <span className={danger ? 'text-red-400' : 'text-[#64748B] dark:text-[#A0A0A0]'}>{icon}</span>
      {children}
    </Link>
  )
}

function MobileLink({
  href,
  children,
  onClick,
  danger,
}: {
  href: string
  children: React.ReactNode
  onClick: () => void
  danger?: boolean
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`flex items-center gap-2 px-3 py-2.5 rounded-md text-sm transition-colors ${
        danger
          ? 'text-red-500 hover:bg-red-50 dark:hover:bg-[#3F2020]'
          : 'text-[#64748B] dark:text-[#A0A0A0] hover:text-[#0F172A] dark:hover:text-white hover:bg-[#F1F5F9] dark:hover:bg-[#2F2F2F]'
      }`}
    >
      {children}
    </Link>
  )
}
