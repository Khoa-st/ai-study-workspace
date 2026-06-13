# AI Study Workspace — Claude Master Context

## Project

Web app that helps students upload PDFs and use AI to generate summaries,
study checklists, flashcards, and quizzes.

## Tech Stack

- Next.js 14 App Router
- TypeScript strict mode (no `any`)
- Tailwind CSS v3
- shadcn/ui (always customized, never default state)
- Supabase (auth, database, storage)
- Anthropic Claude API

## Design System

### Dark Mode

- Background: #191919
- Surface: #2F2F2F
- Border: #3F3F3F
- Text primary: #FFFFFF
- Text secondary: #A0A0A0
- Accent: #0050D8

### Light Mode

- Background: gradient #E8F5FF → #FFFFFF
- Accent overlay: #0050D8 at 5% opacity
- Surface: #FFFFFF
- Border: #E2E8F0
- Text primary: #0F172A
- Text secondary: #64748B
- Accent: #0050D8

### Typography

- Heading: Geist (NOT Inter, NOT Roboto)
- Body: Geist
- Mono: Geist Mono (for code, data, numbers)
- Style: geometric, square-edged, Notion-inspired but NOT copied

### Design Principles

- Notion-inspired structure, unique visual identity
- No purple/neon AI aesthetic
- No generic 3-column equal card layouts
- No emoji anywhere in UI
- Every page must handle: loading state, empty state, error state
- Mobile responsive minimum at md: breakpoint

## Folder Structure

src/
app/
(auth)/login/page.tsx
(auth)/register/page.tsx
(dashboard)/dashboard/page.tsx
page.tsx
layout.tsx
components/
ui/           ← shadcn (always restyled)
layout/       ← Navbar, Sidebar, Footer
features/     ← feature-specific components
lib/
supabase.ts
utils.ts
types/
index.ts

## Agent Roles

- frontend agent → UI/design, Claude builds
- backend agent → backend logic, Claude teaches then I build
- review agent → security, bugs, performance before every push
- mentor agent → how Claude communicates with me

## Non-Negotiable Rules

- Never assume. Always confirm before building anything non-trivial.
- TypeScript strict. No `any`. Proper interfaces everywhere.
- No API keys in code. Always use environment variables.
- Business logic never inside UI components.
- shadcn/ui must be customized to match design system.
- Commit format: type(scope): description — feat/fix/refactor/chore
